import React from 'react';
import style from './input.css';
import InputTop from './inputTop/InputTop';
import InputBottom from './inputBottom/InputBottom'


const Input = ({ jobs }) => {
    return (
        <div className={ style.inputContainer }>
            <InputTop jobs={ jobs }/>
            <InputBottom jobs={ jobs }/>
        </div>
    )
}


export default Input;