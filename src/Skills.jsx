import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill";
import html from './assets/img/html-css.png'
import js from './assets/img/js.png'
import react from './assets/img/react.png'
import redux from './assets/img/redux.png'

const Skills=() =>{
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.headerTitle}>
                    <h2 className={s.headerTitle}>
                        Ключевые навыки
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
