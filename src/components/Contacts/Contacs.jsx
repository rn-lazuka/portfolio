import React, {useState} from 'react';
import s from './Contacts.module.css'
import Button from "../common/Button/Button";
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";
import {Roll} from "react-reveal";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


function Contacts() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const [mail, setMail] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [contactBlock, setContactBlock] = useState(true);
    let submitMessage = () => {
        setLoading(true);
        axios.post("https://smtp-nodejs-server1.herokuapp.com/sendMessage", {mail: mail, name: name, text: text})
            .then(() => {
                setLoading(false);
                setContactBlock(false);
            })

    };
    let returnContactForm = () => {
        setContactBlock(true);
    };
    return (
        <div id={"contacts"}>
            <div className={s.contacts}>
                <div className={s.container}>
                    <div className={s.title}>
                        <h2>{isDesktopOrLaptop ? <Roll right>Контакты</Roll> : "Контакты"}</h2>
                        <div className={'line'}/>
                    </div>

                        {loading ? <div className={s.answer}><Preloader/></div> : <>{contactBlock &&
                        <div className={s.contactForm}>
                            {isDesktopOrLaptop ? <>
                                    <Fade right><input onChange={(e) => setName(e.currentTarget.value)} type={"text"}
                                                       name={"contacts"} placeholder={"ФИО"}/></Fade>
                                    <Fade left> <input onChange={(e) => setMail(e.currentTarget.value)} type={"mail"}
                                                       name={"name"} placeholder={"e-mail"}/></Fade>
                                    <Fade right><textarea onChange={(e) => setText(e.currentTarget.value)}
                                                          placeholder={"Сообщение"} name={"message"}/></Fade></>
                                :
                                <><input onChange={(e) => setName(e.currentTarget.value)} type={"text"}
                                         placeholder={"ФИО"}/>
                                    <input onChange={(e) => setMail(e.currentTarget.value)} type={"mail"}
                                           placeholder={"e-mail"}/>
                                    <textarea onChange={(e) => setText(e.currentTarget.value)}
                                              placeholder={"Сообщение"}/>
                                </>}
                            <div>
                                <Button submitMsg={submitMessage} name={'Отправить'}/>
                            </div>
                        </div>}
                            {!contactBlock &&
                            <div className={s.answer}>
                                <div>Спасибо за проявленный интерес, я обязательно с Вами свяжусь!</div>
                                <Button submitMsg={returnContactForm} name={'Ещё письмо'}/>
                            </div>}
                        </>}
                </div>
            </div>

        </div>
    );
}

export default Contacts;
