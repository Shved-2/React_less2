import React from 'react';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';



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
      <AddMessageFormRedux onSubmit={addNewMessage} />

    </div>
  )
}
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name="newMessageBody" placeholder="введите текст" />
      </div>
      <div>
        <button >отправить</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)
export default Dialogs;
