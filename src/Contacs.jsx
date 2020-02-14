import React from 'react';
import s from './Contacts.module.css'
import Button from "./Button";
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";
import {Roll} from "react-reveal";


function Contacts() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <div className={s.title}>
                    <h2>{isDesktopOrLaptop?<Roll right>Контакты</Roll>:"Контакты"}</h2>
                    <div className={'line'}/>
                </div>

                <form className={s.contactForm}>
                    {isDesktopOrLaptop ? <>
                            <Fade right><input type={"text"} placeholder={"ФИО"}/></Fade>
                            <Fade left> <input type={"mail"} placeholder={"e-mail"}/></Fade>
                            <Fade right><textarea placeholder={"Сообщение"}/></Fade></>
                        :
                        <><input type={"text"} placeholder={"ФИО"}/>
                            <input type={"mail"} placeholder={"e-mail"}/>
                            <textarea placeholder={"Сообщение"}/>
                        </>}
                </form>

                <div>
                    <Button name={'Отправить'}/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
