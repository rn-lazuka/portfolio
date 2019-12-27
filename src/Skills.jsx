import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.title}>
                    My skills
                </div>
                <div className={s.items}>
                    <Skill skillName={"HTML"} description={"Description"}/>
                    <Skill skillName={"CSS"} description={"Description"}/>
                    <Skill skillName={"JS"} description={"Description"}/>
                    <Skill skillName={"React"} description={"Description"}/>
                    <Skill skillName={"Redux"} description={"Description"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
