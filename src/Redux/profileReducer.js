import { usersAPI } from "../api/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    postData: [
        { id: 0, message: 'ну че кого???', likeCount: 12 },
        { id: 0, message: 'та пока не понятно', likeCount: 34 },
        { id: 0, message: 'учим react', likeCount: 1 },
        { id: 0, message: 'тра-та-та', likeCount: 74 },
    ],
    newPostText: 'введите текст',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''

            }

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }


        default:
            return state;


    }

}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const UpdateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })





export default profileReducer;
