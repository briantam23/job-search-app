import React, { useState, useEffect } from 'react';
import style from './inputTop.css';
import { searchKeywords } from '../../../utils';


const InputTop = ({ jobs }) => {
    const [keywords, setKeywords] = useState('');
    const handleChange = e => setKeywords(e.target.value);

    const handleClick = e => console.log(searchKeywords(keywords.toLowerCase(), jobs));
    
    return (
        <div className={ style.inputTopContainer }>
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
                <div className={ style.filterInput }>
                    <input placeholder='Locations' disabled/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Interests' disabled/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Industries' disabled/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Functions' disabled/>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}


export default InputTop;