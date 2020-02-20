import React from 'react';
import s from './NavMenu.module.css'
import { Link } from "react-scroll";

function NavMenu() {
    return (
        <div className={s.navMenu}>
            <Link
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-78}
                duration= {500}
            ><span>Главная</span></Link>
            <Link
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-78}
                duration= {500}
            ><span>Скилы</span></Link>
            <Link
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-78}
                duration= {500}
            ><span>Проекты</span></Link>
            {/*<Link*/}
            {/*    activeClass={s.active}*/}
            {/*    to="slogan"*/}
            {/*    spy={true}*/}
            {/*    smooth={true}*/}
            {/*    offset={-80}*/}
            {/*    duration= {500}*/}
            {/*><span>Резюме</span></Link>*/}
            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-85}
                duration= {500}
            ><span>Контакты</span></Link>
        </div>
    );
}

export default NavMenu;
