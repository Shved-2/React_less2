import React from 'react';
import ss from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={ss.dia}>
      <div className={ss.dialogsItem}>
        <div className={ss.dialog}>
          Vasya
        </div>
        <div className={ss.dialog+' '+ss.active}>
          Petya
        </div>
        <div className={ss.dialog}>
          Mary
        </div>
        <div className={ss.dialog}>
          Sveta
        </div>
        <div className={ss.dialog}>
          Nika
        </div>
        <div className={ss.dialog}>
          Vasya
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