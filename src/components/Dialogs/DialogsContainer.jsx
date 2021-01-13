import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';


let mapStateToPropse = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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