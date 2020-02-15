import React from 'react';
import s from './NavMenu.module.css'
import { Link,  } from "react-scroll";

function NavMenu() {
    return (
        <div className={s.navMenu}>
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
            Главная
            </Link>
            <Link
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
                Скилы
            </Link>
            <Link
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
                Проекты
            </Link>
            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
            >
                Контакты
            </Link>
        </div>
    );
}

export default NavMenu;
