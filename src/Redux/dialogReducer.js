const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:{
            let stateCopy = { ...state }
            let body = { id: 5, message: state.newMessageBody }
            stateCopy.messageData= [...state.messageData]
            stateCopy.messageData.push(body);
            stateCopy.newMessageBody = '';
            return stateCopy;}

        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state }
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }

        default:
            return state;
    }



}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer;