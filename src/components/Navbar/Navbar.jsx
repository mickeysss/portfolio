import { AppBar,Toolbar} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div position="fixed" className={styles.appbar} >
            <Toolbar className={styles.toolbar}>
                <NavLink to={'/'}>Обо мне</NavLink>
                <NavLink to={'/projects'}>Проекты</NavLink>
                <NavLink to={'/contacts'}>Контакты</NavLink>
            </Toolbar>
        </div>
    );
}

export default Navbar;
