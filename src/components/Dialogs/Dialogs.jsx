import React from 'react';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogs = state.dialogsData.map((d) => {
    return (
      <DialogItem name={d.name} key={d.id} id={d.id} />
    )
  })

  let messages = state.messageData.map((m) => {
    return (
      <Message message={m.message} key={m.id} />
    )
  })
  let newMessageBody = state.newMessageBody;


  //let textMessage = React.createRef();
  let onSendMessageClick = () => {
    props.sendMessage();

  }

  let onNewMessageClick = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);


  }
  if (!props.isAuth) return <Redirect to={'/login'} />;
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