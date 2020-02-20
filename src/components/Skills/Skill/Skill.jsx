import React from 'react';
import s from './Skill.module.css'
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";


function Skill(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <>
        {isDesktopOrLaptop ?
                <Fade left cascade>
                    <div>
                    <div className={s.item}>
                        <div className={s.icon}>
                            <img src={props.icon} alt={"#"}/>
                        </div>
                        <h3>{props.skillName}</h3>
                        <div className={s.description}>{props.description}</div>
                    </div>
                    </div>
                </Fade>
                :
                <div className={s.item}>
                    <div className={s.icon}>
                        <img src={props.icon} alt={"#"}/>
                    </div>
                    <h3>{props.skillName}</h3>
                    <div className={s.description}>{props.description}</div>
                </div>
        }
        </>
    );
}

export default Skill;
