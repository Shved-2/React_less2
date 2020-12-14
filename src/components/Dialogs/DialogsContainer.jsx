import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogReducer';
import StoreContext from '../../storeContex';
import Dialogs from './Dialogs';


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
export default DialogsContainer;