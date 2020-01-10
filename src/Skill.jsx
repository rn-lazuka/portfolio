import React from 'react';
import s from './Skill.module.css'

function Skill(props) {
    return (
            <div className={s.item}>
                <div>
                    <img/><br/>
                    {props.skillName}
                </div>
                <div className={s.description}>{props.description}</div>
            </div>
    );
}

export default Skill;
