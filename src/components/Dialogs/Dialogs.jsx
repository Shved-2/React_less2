import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Messages/Message'



const Dialogs = (props) => {

 
  
  let dialogs  = props.state.dialogsData.map((d)=>{
    return(
      <DialogItem name={d.name} id={d.id} />
    )
  })

  let messages = props.state.messageData.map((m)=>{
    return(
      <Message message={m.message} />
    )
  })


  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        {dialogs}      
      </div>


      <div className={ss.messages}>
        {messages} 
      </div>
    </div>
  )
}
export default Dialogs;