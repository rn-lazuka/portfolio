import React from 'react';
import s from './Button.module.css'

function Button(props) {
    return (
        <div>
            <button onClick={props.submitMsg} className={s.customBtn}>{props.name}</button>
        </div>
    );
}

export default Button;
