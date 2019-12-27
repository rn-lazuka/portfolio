import React from 'react';
import s from './Project.module.css'

function Project() {
    return (
        <div className={s.item}>
            <div className={s.picture}>
            <button>Смотреть</button>
            </div>
            <div> Description</div>
        </div>
            );
}

export default Project;
