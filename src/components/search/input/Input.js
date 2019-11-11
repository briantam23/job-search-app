import React, { useState } from 'react';
import style from './input.css';
import InputFilter from './inputFilter/InputFilter';
import { filters } from '../../../utils';


const Input = ({ jobs, history }) => {
    const [keywords, setKeywords] = useState('');

    const handleChange = e => setKeywords(e.target.value);
    const handleClick = e => history.push(`/?query=${keywords.toLowerCase()}`);

    return (
        <div className={ style.inputContainer }>
            <div className={ style.searchInput }>
                <input  
                    value={ keywords }
                    onChange={ handleChange }
                    name='keywordsSearch' 
                    placeholder='Search Jobs'
                    autoFocus 
                >                
                </input>
                <button onClick={ () => handleClick() }>
                    &#128269;
                </button>
            </div>
            <h3>Filter by:</h3>
            <div className={ style.filterContainer }>
            { 
                filters.map((filter, idx) => (
                    <InputFilter jobs={ jobs } filter={ filter } key={ idx }/>
                )) 
            }
            </div>
        </div>
    )
}


export default Input;