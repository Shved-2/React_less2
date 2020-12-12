const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = { id: 5, message: state.newMessageBody }            
            state.messageData.push(body);
            state.newMessageBody = '';
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }



}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodytCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogReducer;