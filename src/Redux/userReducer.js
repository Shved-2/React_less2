import { usersAPI } from "../api/Api";
import { updateObjectInArray } from "../utils/object-helpers";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = ' SET_CURRENT_PAGE'//выбор активаной страницы
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'//общеее кол-во   юзеров
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const FAKE = 'FAKE'


let initialState = {
    users: [],
    pageSize: 50,//кол-во юзеров на странице
    totalUsersCount: 0,// кол-во юзеров  вмассиве
    currentPage: 1,//активная страница
    isFetching: false,
    followingInProgress: [],
    fake: 10
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FAKE: return { ...state, fake: state.fake + 1 }
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })

            }
        case SET_USERS:
            return {
                ...state, users: action.users

            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }

        default:
            return state;
    }

}
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggletIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const reqestUsers = (page, pageSize) => {

    return async (dispatch) => {
        dispatch(toggletIsFetching(true));
        dispatch(setCurrentPage(page));

        let data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggletIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));


    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreater(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId) => {

    return async (dispatch) => {

        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;