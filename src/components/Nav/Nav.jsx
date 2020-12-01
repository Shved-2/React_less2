import React from 'react';
import ss from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={ss.nav}>
            <div className={ss.item}><a href="#">Profile</a></div>
            <div className={`${ss.item} ${ss.active}`}><a href="#">News</a></div>
            <div className={ss.item}><a href="#">message</a></div>
            <div className={ss.item}><a href="#">Music</a></div>
            <div className={ss.item}><a href="#">Frend</a></div>
            <div className={ss.item}><a href="#">Frend123</a></div>

        </nav>
    )
}

export default Nav;