import React from 'react';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import AddMessageForm from './AddMessageForm/AddMessageForm';



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
  

  let addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);

  }

  //if (!props.isAuth) return <Redirect {/*to={'/login'}*/} />;
  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        {dialogs}
      </div>

      <div className={ss.messages}>
        <div>{messages}</div>

      </div>
      <AddMessageForm onSubmit={addNewMessage} />

    </div>
  )
}

export default Dialogs;
