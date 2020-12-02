import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>

        <div className={ss.dialog + ' ' + ss.active}>
          <NavLink to="/dialogs/1">Petya</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/2">Mary</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/4">Nika</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/5">Vasya</NavLink>
        </div>
        <div className={ss.dialog}>
          <NavLink to="/dialogs/6">Vasya</NavLink>
        </div>

      </div>
      <div className={ss.messages}>
        <div className={ss.message}>
          привет, че каго???
        </div>
        <div className={ss.message}>
          Вроде пока чсто не понятно, но врооде потитхоньку
        </div>
        <div className={ss.message}>
          ништяк)))
          ништяк))
        </div>
      </div>
    </div>
  )
}
export default Dialogs;