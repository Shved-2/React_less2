import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'



const Dialogs = (props) => {



  let dialogs = props.state.dialogsData.map((d) => {
    return (
      <DialogItem name={d.name} id={d.id} />
    )
  })

  let messages = props.state.messageData.map((m) => {
    return (
      <Message message={m.message} />
    )
  })
  let textMessage = React.createRef();
  let newMessage = () => {
    let text = textMessage.current.value;
    alert(text);

  }

  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        {dialogs}
      </div>


      <div className={ss.messages}>
        {messages}
      </div>

      <div>
        <textarea ref={textMessage}></textarea>
      </div>
      <div>
        <button onClick={newMessage}>отправить</button>
      </div>
    </div>
  )
}
export default Dialogs;