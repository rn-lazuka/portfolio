import React from 'react';
import s from './Project.module.css'

function Project() {
    return (
        <div className={s.item}>
            <div className={s.picture}>
            <button>Смотреть</button>
            </div>
            <div className={s.description}>
                <h3>Name of Project</h3>
                <span>Description</span>
            </div>
        </div>
            );
}

export default Project;