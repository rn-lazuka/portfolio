import React from 'react';
import s from './Contacts.module.css'
import Button from "./Button";

function Contacts() {
    return (
        <div className={s.contacts}>

            <div className={s.container}>
                <div className={s.title}>
                    <h2>Контакты</h2>
                    <div className={'line'}> </div>
                </div>

                <form className={s.contactForm}>
                    <input type={"text"} placeholder={"ФИО"}/>
                    <input type={"mail"} placeholder={"e-mail"}/>
                    <textarea placeholder={"Сообщение"}/>
                </form>

                <div>
                    <Button name={'Отправить'}/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
