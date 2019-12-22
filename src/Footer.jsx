import React from 'react';
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.title}>
                Роман Лазука
            </div>
            <div className={s.items}>
                <a href={"https://vk.com/"}>VK</a>
                <a href={"https://instagram.com/"}>Inst</a>
                <a href={"https://linkedin.com/"}>Link</a>
                <a href={"https://telegram.org/"}>Telegram</a>
            </div>
            <div> ®Все права защищены</div>
        </div>
    );
}

export default Footer;
