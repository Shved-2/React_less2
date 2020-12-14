import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {  

  let state = props.store.getState().dialogsPage; 

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());

  }

  let onNewMessageClick = (body) => {    
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }


  return (
    <Dialogs  updateNewMessageBody={onNewMessageClick} 
    sendMessage={onSendMessageClick}
    dialogsPage={state}/>
  )
}
export default DialogsContainer;