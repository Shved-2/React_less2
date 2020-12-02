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

const Dialogs = () => {
  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      
      </div>

      <div className={ss.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
       

      </div>
    </div>
  )
}
export default Dialogs;