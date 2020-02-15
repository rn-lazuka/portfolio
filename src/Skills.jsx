import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill";
import html from './assets/img/html-css.png'
import js from './assets/img/js.png'
import react from './assets/img/react.png'
import redux from './assets/img/redux.png'
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";

const Skills=() =>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <div className={s.skills} id="skills">
            <div className={s.container}>
                 <div>
                    <h2>{isDesktopOrLaptop?<Fade left big cascade>
                        Ключевые навыки
                    </Fade>:"Ключевые навыки"}
                    </h2>
                    <div className={'line'}>
                    </div>
                </div>

                <div className={s.items}>
                    <Skill skillName={"HTML&CSS"}
                           icon={html}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill skillName={"JS"}
                           icon={js}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill skillName={"React"}
                           icon={react}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill skillName={"Redux"}
                           icon={redux}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
