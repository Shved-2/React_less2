import { connect } from 'react-redux';
import { compose } from 'redux';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';


let mapStateToPropse = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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


export default compose(
  connect(mapStateToPropse, mapDispatchToProps),
 // widthAuthRedirect
)(Dialogs);