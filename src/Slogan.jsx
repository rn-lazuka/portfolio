import React from 'react';
import s from './Slogan.module.css'

function Slogan() {
    return (
        <div className={s.slogan}>
        <div className={s.container}>
            <div> Рассматриваю вариант удаленной работы</div>
            <button> Нанять меня</button>
        </div>
        </div>
    );
}

export default Slogan;
