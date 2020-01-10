import React from 'react';
import s from './Slogan.module.css'
import Button from "./Button";

function Slogan() {
    return (
        <div className={s.slogan}>
        <div className={s.container}>
            <div>
                <h2>Я на фрилансе</h2>
                <div className={"line"}> </div>
            </div>
            <Button name={'Нанять меня'}/>
        </div>
        </div>
    );
}

export default Slogan;
