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
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE://добавить сообщение
            let body = action.newMessageBody
            return {
                ...state,
                messageData: [...state.messageData, { id: 5, message: body }],

            }

        default:
            return state;
    }



}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogReducer;