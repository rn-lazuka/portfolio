import React from 'react';
import s from './Projects.module.css'

function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <div className={s.title}>
                    My Works
                </div>
                <div className={s.items}>
                    <div className={s.item}>
                        <div> Description</div>
                    </div>
                    <div className={s.item}>
                    <button>Смотреть</button>
                        <div> Description</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
