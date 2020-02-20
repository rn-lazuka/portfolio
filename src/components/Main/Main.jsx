import React from 'react';
import s from './Main.module.css'
import Tilt from 'react-tilt'
import profile from '../assets/img/benderProfile.jpg'

function Main() {
    return (
        <div id={"main"} className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут <span>Роман Лазука</span></span>
                    <h1>Я front-end разработчик</h1>
                </div>
                <div className={s.photo}>
                    <Tilt className="Tilt" options={{
                        reverse: false,  // reverse the tilt direction
                        max: 35,     // max tilt rotation (degrees)
                        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
                        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
                        speed: 300,    // Speed of the enter/exit transition
                        transition: true,   // Set a transition on enter/exit.
                        axis: null,   // What axis should be disabled. Can be X or Y.
                        reset: true,   // If the tilt effect has to be reset on exit.
                        easing: "cubic-bezier(.03,.98,.52,.99)"
                    }} style={{height: 250, width: 250}}>
                        <div className="Tilt-inner">
                            <div className={s.image} style={{
                                backgroundImage: `url(${profile})`
                            }}/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Main;
