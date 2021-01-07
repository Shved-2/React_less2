import React from 'react';
import { NavLink } from 'react-router-dom';
import ss from './Header.module.css'

const Header = (props) => {
  return (
    <header className={ss.header}>
      <img src="https://s1.iconbird.com/ico/2013/3/635/w260h2601393885383114.png"  alt="dfg"/>
      
      <div className={ss.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={'./login'}>Login</NavLink>
        }

      </div>

    </header>
  )
}
export default Header;