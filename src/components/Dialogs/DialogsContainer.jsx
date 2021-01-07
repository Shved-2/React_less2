import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';

/*
const DialogsContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        }
        let onNewMessageClick = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        }

        return <Dialogs updateNewMessageBody={onNewMessageClick}
          sendMessage={onSendMessageClick}
          dialogsPage={state} />
      }
      }


    </StoreContext.Consumer>
  )
}
*/
let mapStateToPropse = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToPropse, mapDispatchToProps)(Dialogs);
export default DialogsContainer;