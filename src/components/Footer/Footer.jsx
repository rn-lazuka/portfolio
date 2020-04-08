import React from 'react';
import s from './Footer.module.css';
import vk from '../assets/img/vk.png';
import telegram from '../assets/img/telegram.png';
import linkedin from '../assets/img/in.png';
import instagram from '../assets/img/inst.png';
import github from '../assets/img/github.png';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.title}>
                Роман Лазука
            </div>
            <nav className={s.items}>
               <a href={"https://vk.com/roman_nnm"} target={'_blank'}>
                   <img src={vk} alt="#"/>
               </a>
                <a href={"https://t.me/roman_nnm"} target={'_blank'}>
                    <img src={telegram} alt="#"/>
                </a>
                <a href={"https://www.linkedin.com/in/rn-lazuka/"} target={'_blank'}>
                    <img src={linkedin} alt="#"/>
                </a>
                <a href={"https://www.instagram.com/roman.lazuka/"} target={'_blank'}>
                    <img src={instagram} alt="#"/>
                </a>
                <a href={"https://github.com/rn-lazuka"} target={'_blank'}>
                    <img src={github} alt="#"/>
                </a>
            </nav>
            <div>©Все права защищены</div>
        </div>
    );
}

export default Footer;
