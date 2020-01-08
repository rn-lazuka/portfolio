import React from 'react';
import s from './Main.module.css'

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут <span>Роман Лазука</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
