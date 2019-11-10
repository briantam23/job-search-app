import React from 'react';
import style from './inputBottom.css';


const InputBottom = ({ jobs }) => {
    return (
        <div className={ style.inputBottomContainer }>
            <h1>{ jobs.length }</h1>
            <h4>Jobs Available</h4>
            <p>&#x2B07;</p>
        </div>
    )
}


export default InputBottom;