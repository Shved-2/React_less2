import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={ss.nav}>
            <div className={ss.item}>
                <NavLink to="/profile" activeClassName={ss.active}>Профиль</ NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/dialogs" activeClassName={ss.active}>Сообщения</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/News"  activeClassName={ss.active}>Новости</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/Music" activeClassName={ss.active}>Музыка</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/Setting" activeClassName={ss.active}>Настройки</NavLink>
            </div>
            <div className={ss.item}>
                <NavLink to="/Frends" activeClassName={ss.active}>Друзья</NavLink>
            </div>


        </nav>
    )
}

export default Nav;