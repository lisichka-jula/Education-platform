import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav} >
            <ul>
                <li>Profil</li>
                <li>Courses</li>
                <li>Messages</li>
                <li>Settings</li>
            </ul>
        </nav >
    )
}

export default Nav;