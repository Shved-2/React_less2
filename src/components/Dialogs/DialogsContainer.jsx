import React from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';


let mapStateToPropse = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  }
}


export default compose(
  connect(mapStateToPropse, mapDispatchToProps),
  // widthAuthRedirect
)(Dialogs);