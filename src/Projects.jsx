import React from 'react';
import s from './Projects.module.css'
import Project from "./Project";

function Projects() {
    return (
        <div className={s.projects}>
            <div className={s.container}>
                <div className={s.title}>
                   <h2>Мои работы</h2>
                    <div className={'line'}> </div>
                </div>
                <div className={s.items}>
                   <Project/>
                   <Project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
