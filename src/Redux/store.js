import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


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
            ],
            newMessageBody: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('!!!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

        
    }
}









export default store;
window.state = store;