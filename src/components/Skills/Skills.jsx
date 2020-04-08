import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill/Skill";
import html from '../assets/img/html-css.png'
import js from '../assets/img/js.png'
import react from '../assets/img/react.png'
import typescript from '../assets/img/typescript.png'
import redux from '../assets/img/redux.png'
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";

const Skills = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <div className={s.skills} id="skills">
            <div className={s.container}>
                <div>
                    <h2>{isDesktopOrLaptop ? <Fade left big cascade>
                        Ключевые навыки
                    </Fade> : "Ключевые навыки"}
                    </h2>
                    <div className={'line'}>
                    </div>
                </div>

                <div className={s.items}>
                    <Skill skillName={"HTML&CSS"}
                           icon={html}
                           description={""}/>
                    <Skill skillName={"JS"}
                           icon={js}
                           description={""}/>
                    <Skill skillName={"React"}
                           icon={react}
                           description={""}/>
                    <Skill skillName={"Redux"}
                           icon={redux}
                           description={""}/>
                    <Skill skillName={"TypeScript"}
                           icon={typescript}
                           description={""}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
