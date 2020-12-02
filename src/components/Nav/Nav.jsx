import React from 'react';
import ss from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={ss.nav}>
            <div className={ss.item}><a href="/profile">Профиль</a></div>
            <div className={ss.item}><a href="/dialogs">Сообщения</a></div>
            <div className={`${ss.item} ${ss.active}`}><a href="#">Новости</a></div>
            
            <div className={ss.item}><a href="#">Музыка</a></div>
            <div className={ss.item}><a href="#">Друзья</a></div>
            <div className={ss.item}><a href="#">Настройки</a></div>

        </nav>
    )
}

export default Nav;