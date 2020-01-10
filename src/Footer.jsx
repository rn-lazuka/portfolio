import React from 'react';
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.title}>
                Роман Лазука
            </div>
            <nav className={s.items}>
               <a href={"#"}>Facebook</a>
                <a href={"#"}>VK</a>
                <a href={"#"}>LinkedIn</a>
                <a href={"#"}>Instagram</a>
            </nav>
            <div> ®Все права защищены</div>
        </div>
    );
}

export default Footer;
