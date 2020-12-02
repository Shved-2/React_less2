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
  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        <DialogItem name="Petya" id="1" />
        <DialogItem name="Mary" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Nika" id="4" />
        <DialogItem name="Vasya" id="5" />
        <DialogItem name="Ivan" id="6" />
      </div>

      <div className={ss.messages}>
        <Message message="привет. че каго??" />
        <Message message="Вроде пока чсто не понятно, но врооде потитхоньку" />
        <Message message="ништяк)))
          ништяк))"/>
        <Message message="да-да-да" />
        <Message message="посмотрим дельше" />

      </div>
    </div>
  )
}
export default Dialogs;