import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './../Dialogs.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={ss.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;