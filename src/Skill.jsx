import React from 'react';
import s from './Skill.module.css'

function Skill(props) {
    return (
        <div className={s.item}>
            <div className={s.icon}>
                <img src={props.icon} alt={"#"}/>
            </div>
            <h3>{props.skillName}</h3>
            <div className={s.description}>{props.description}</div>
        </div>
    );
}

export default Skill;
