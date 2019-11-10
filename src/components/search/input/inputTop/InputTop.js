import React from 'react';
import style from './inputTop.css';


const InputTop = ({ jobs }) => {
    return (
        <div className={ style.inputTopContainer }>
            <input 
                className={ style.searchInput }
                name='search' 
                placeholder='Search Jobs'
                autoFocus 
            />
            <h3>Filter by:</h3>
            <div className={ style.filterContainer }>
                <div className={ style.filterInput }>
                    <input placeholder='Locations'/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Interests'/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Industries'/>
                    <button>+</button>
                </div>
                <div className={ style.filterInput }>
                    <input placeholder='Functions'/>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}


export default InputTop;