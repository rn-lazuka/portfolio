import React from 'react';
import s from './Project.module.css'
import Button from "./Button";
import Zoom from 'react-reveal/Zoom';
import {useMediaQuery} from "react-responsive";


function Project(props) {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    return (
        <>
            {isDesktopOrLaptop ?
                <Zoom>
                    <div className={s.item}>
                        <div className={s.picture} style={{
                            backgroundImage: `url(${props.background})`
                        }}>
                            <a href={props.projectLink} target={'_blank'}><Button name={'Смотреть'}/></a>
                        </div>
                        <div className={s.description}>
                            <h3>{props.name}</h3>
                            <span>{props.description}</span>
                        </div>
                    </div>
                </Zoom>
                :
                <div className={s.item}>
                    <div className={s.picture} style={{
                        backgroundImage: `url(${props.background})`
                    }}>
                        <a href={props.projectLink} target={'_blank'}><Button name={'Смотреть'}/></a>
                    </div>
                    <div className={s.description}>
                        <h3>{props.name}</h3>
                        <span>{props.description}</span>
                    </div>
                </div>
            }
        </>
    );
}

export default Project;
