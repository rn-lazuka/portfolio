import React from 'react';
import s from './Slogan.module.css'
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
                <a href={"https://jobs.tut.by/applicant/resumes/view?resume=7dfc0bc7ff02bf8d090039ed1f336830434230"} target={'_blank'}>Нанять меня</a>
            </div>
        </div>
    );
}

export default Slogan;
