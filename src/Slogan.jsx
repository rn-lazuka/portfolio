import React from 'react';
import s from './Slogan.module.css'
import Button from "./Button";
import Roll from 'react-reveal/Roll';
import {useMediaQuery} from "react-responsive";



function Slogan() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <div className={s.slogan} id={"slogan"}>
            <div className={s.container}>
                <div>
                    {isDesktopOrLaptop ? <h2><Roll left cascade>Я на фрилансе</Roll></h2> : <h2>Я на фрилансе</h2>}
                    <div className={"line"}/>
                </div>
                <Button name={'Нанять меня'}/>
            </div>
        </div>
    );
}

export default Slogan;
