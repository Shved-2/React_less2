import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './../Dialogs.module.css'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={ss.dialog}>
      <NavLink to={path}>
        <img  src="https://st2.depositphotos.com/1898481/6448/i/600/depositphotos_64486573-stock-photo-people.jpg" alt="kjh" />
        {props.name}</NavLink>
    </div>
  )
}

export default DialogItem;