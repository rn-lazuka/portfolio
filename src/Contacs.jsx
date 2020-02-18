import React, {useState} from 'react';
import s from './Contacts.module.css'
import Button from "./Button";
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";
import {Roll} from "react-reveal";
import axios from "axios";



function Contacts() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
 let submitMessage = () => {
     debugger
     axios.post("http://localhost:3010/sendMessage", {mail:mail,name:name,text:text})
         .then(()=> {
             alert({mail:mail,name:name,text:text})
         })

 };
 const [mail,setMail]= useState('');
 const [name,setName]= useState('');
 const [text,setText]= useState('');
    return (
        <div id={"contacts"}>
        <div className={s.contacts} >
            <div className={s.container}>
                <div className={s.title}>
                    <h2>{isDesktopOrLaptop?<Roll right>Контакты</Roll>:"Контакты"}</h2>
                    <div className={'line'}/>
                </div>

                <form className={s.contactForm}>
                    {isDesktopOrLaptop ? <>
                            <Fade right><input onChange={(e)=>setName(e.currentTarget.value)} type={"text"} name={"contacts"} placeholder={"ФИО"}/></Fade>
                            <Fade left> <input  onChange={(e)=>setMail(e.currentTarget.value)} type={"mail"}  name={"name"} placeholder={"e-mail"}/></Fade>
                            <Fade right><textarea  onChange={(e)=>setText(e.currentTarget.value)} placeholder={"Сообщение"}  name={"message"}/></Fade></>
                        :
                        <><input type={"text"} placeholder={"ФИО"}/>
                            <input type={"mail"} placeholder={"e-mail"}/>
                            <textarea placeholder={"Сообщение"}/>
                        </>}
                    <div>
                        <Button submitMsg={submitMessage} name={'Отправить'}/>
                    </div>
                </form>


            </div>
        </div>
        </div>
    );
}

export default Contacts;
