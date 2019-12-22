import React from 'react';
import s from './Skills.module.css'

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.title}>
                    My skills
                </div>
                <div className={s.items}>
                    <div className={s.item}>HTML</div>
                    <div className={s.item}>CSS</div>
                    <div className={s.item}>React</div>
                    <div className={s.item}>Node JS</div>
                    <div className={s.item}>Redux</div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
