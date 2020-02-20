import React from 'react';
import s from './Projects.module.css'
import Project from "./Project/Project";
import todolist from '../assets/img/todolist.png'
import socialnet from '../assets/img/socialnet.png'
import counter from '../assets/img/counter.png'
import game from '../assets/img/game-onclick.png'
import Fade from 'react-reveal/Fade';
import {useMediaQuery} from "react-responsive";

function Projects() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <div className={s.projects} id="projects">
            <div className={s.container}>
                {isDesktopOrLaptop?<Fade bottom>
                    <div className={s.title} >
                        <h2>Мои работы</h2>
                        <div className={'line'}>
                        </div>
                    </div>
                </Fade> :  <div className={s.title}>
                        <h2>Мои работы</h2>
                        <div className={'line'}>
                        </div>
                    </div>}

                <div className={s.items}>
                    <Project name={'To do list'}
                             projectLink={'https://rn-lazuka.github.io/todolist'}
                             background={todolist}/>
                    <Project name={'Social network'}
                             projectLink={'https://rn-lazuka.github.io/socialnet/#/profile'}
                             background={socialnet}/>
                    <Project name={'Counter'}
                             projectLink={'https://rn-lazuka.github.io/counter-2.1/'}
                             background={counter}/>
                <Project name={'Dog game'}
                             projectLink={'https://rn-lazuka.github.io/game-onClick'}
                             background={game}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
