import React from 'react';
import s from './Skills.module.css'
import Skill from "./Skill";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <div className={s.headerTitle}>
                    <h2 className={s.headerTitle}>
                    Ключевые навыки
                    </h2>
                    <div className={'line'}> </div>
                </div>
                <div className={s.items}>
                    <Skill skillName={"HTML&CSS"}
                           src={'https://d2xzmw6cctk25h.cloudfront.net/interactivecourse/246/image/medium-d78d9b9e6bf2317220f7b77a05fb8d4a.png'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill skillName={"JS"}
                           src={'https://assets.coingecko.com/coins/images/1061/large/js.png?1511578998'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill skillName={"React"}
                           src={'https://react-native-community.github.io/upgrade-helper/static/media/logo.74ebf3f4.svg'}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
