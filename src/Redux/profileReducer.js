const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        { id: 0, message: 'ну че кого???', likeCount: 12 },
        { id: 0, message: 'та пока не понятно', likeCount: 34 },
        { id: 0, message: 'учим react', likeCount: 1 },
        { id: 0, message: 'тра-та-та', likeCount: 74 },
    ],
    newPostText: 'введите текст'
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


        default:
            return state;


    }

}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;