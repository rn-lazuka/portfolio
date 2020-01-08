import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.headerTitle}>
                    <h2 className={s.headerTitle}>
                        My skills
                    </h2>
                    <div className={s.line}> </div>
                </div>
                <div className={s.items}>
                    <Skill skillName={"HTML&CSS"} description={"Description"}/>
                    <Skill skillName={"JS"} description={"Description"}/>
                    <Skill skillName={"React"} description={"Description"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
