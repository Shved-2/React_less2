import React from 'react';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogs = state.dialogsData.map((d) => {
    return (
      <DialogItem name={d.name} id={d.id} />
    )
  })

  let messages = state.messageData.map((m) => {
    return (
      <Message message={m.message} />
    )
  })
  let newMessageBody = state.newMessageBody;


  let textMessage = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage();

  }

  let onNewMessageClick = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
   

  }

  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        {dialogs}
      </div>


      <div className={ss.messages}>
        <div>{messages}</div>
        <div>
          <div>
            <textarea value={newMessageBody}
              onChange={onNewMessageClick}
              placeholder="введите текст"></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>отправить</button>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Dialogs;