
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {

    _state: {

        profilePage: {
            postData: [
                { id: 0, message: 'ну че кого???', likeCount: 12 },
                { id: 0, message: 'та пока не понятно', likeCount: 34 },
                { id: 0, message: 'учим react', likeCount: 1 },
                { id: 0, message: 'тра-та-та', likeCount: 74 },
            ],
            newPostText: 'введите текст',
        },

        dialogsPage: {
            dialogsData: [
                { id: 0, name: "Petya" },
                { id: 1, name: "Mary" },
                { id: 2, name: "Sveta" },
                { id: 3, name: "Nikaa" },
                { id: 4, name: "Vasya" },
                { id: 5, name: "Ivan" }
            ],
            messageData: [
                { id: 0, message: "привет. че каго??" },
                { id: 1, message: "Вроде пока чсто не понятно, но врооде потитхоньку" },
                { id: 2, message: "ништяк))) ништяк))" },
                { id: 3, message: "да-да-да" },
                { id: 4, message: "посмотрим дельше" }
            ]
        }
    },
    _callSubscriber() {
        console.log('!!!');
    },

    getstate() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })





export default store;
window.state = store;