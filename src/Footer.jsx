import React from 'react';
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.title}>
                Роман Лазука
            </div>
            <div className={s.items}>
                <img alt={"contact"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroUdgM-lV395MCuzRaqwPxcqmzcIb9XBvWnNn5pb5i5RyoPOt&s"}/>
                <img alt={"contact"}  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroUdgM-lV395MCuzRaqwPxcqmzcIb9XBvWnNn5pb5i5RyoPOt&s"}/>
                <img alt={"contact"}  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroUdgM-lV395MCuzRaqwPxcqmzcIb9XBvWnNn5pb5i5RyoPOt&s"}/>
                <img alt={"contact"}  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroUdgM-lV395MCuzRaqwPxcqmzcIb9XBvWnNn5pb5i5RyoPOt&s"}/>
            </div>
            <div> ®Все права защищены</div>
        </div>
    );
}

export default Footer;
