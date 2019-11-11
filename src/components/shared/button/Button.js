import React, { Fragment } from 'react';
import style from './button.css';


const Button = ({ text, link }) => {
    return (
        <button>
            <a href={ link }>
                { text }
            </a>
        </button>
    )
}


export default Button;