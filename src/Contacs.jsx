import React from 'react';
import s from './Contacts.module.css'

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
              <div className={s.title}> Contacts</div>
                <form>
                    <input type={"text"} placeholder={"ФИО"}/>
                    <input type={"mail"} placeholder={"e-mail"}/>
                    <textarea placeholder={"Сообщение"}/>
                </form>
                <div>
                    <button> Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
