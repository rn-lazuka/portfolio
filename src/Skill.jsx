import React from 'react';
import s from './Skill.module.css'

function Skill(props) {
    return (
            <div className={s.item}>
                    <img src={props.src} alt={props.alt}/><br/>
                <h3>{props.skillName}</h3>
                    <div className={s.description}>{props.description}</div>
            </div>
    );
}

export default Skill;
