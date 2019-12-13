import React from 'react';
import s from './NavMenu.module.css'

function NavMenu() {
    return (
        <div className={s.navMenu}>
            <a className={s.link} href="">Главная</a>
            <a className={s.link} href="">Скилы</a>
            <a className={s.link} href="">Проекты</a>
            <a className={s.link} href="">Контакты</a>
        </div>
    );
}

export default NavMenu;
