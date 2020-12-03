import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={ss.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={ss.message}>
      {props.message}
    </div>
  )
}

const Dialogs = () => {

  let dialogsData=[
    {id:0, name:"Petya"},
    {id:1, name:"Mary"},
    {id:2, name:"Sveta"},
    {id:3, name:"Nikaa"},
    {id:4, name:"Vasya"},
    {id:5, name:"Ivan"}
  ]
  let messageData=[
    {id:0, message: "привет. че каго??"},
    {id:1, message: "Вроде пока чсто не понятно, но врооде потитхоньку" },
    {id:2, message: "ништяк))) ништяк))"},
    {id:3, message: "да-да-да"},
    {id:4, message:"посмотрим дельше"}
  ]
  
  let dialogs  = dialogsData.map((d)=>{
    return(
      <DialogItem name={d.name} id={d.id} />
    )
  })

  let messages = messageData.map((m)=>{
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