import React from 'react';
import style from './input.css';


const Input = () => {
    return (
        <div className={ style.inputContainer }>
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
                        <input placeholder='Locations'></input>
                        <input type='checkbox'/>
                    </div>
                    <div className={ style.filterInput }>
                        <input placeholder='Interests'></input>
                        <input type='checkbox'/>
                    </div>
                    <div className={ style.filterInput }>
                        <input placeholder='Industries'></input>
                        <input type='checkbox'/>
                    </div>
                    <div className={ style.filterInput }>
                        <input placeholder='Functions'></input>
                        <input type='checkbox'/>
                    </div>
                </div>
            </div>
            <div className={ style.inputBottomContainer }>
                <h1>500+</h1>
                <h4>Jobs Available</h4>
                <p>&#x2B07;</p>
            </div>
        </div>
    )
}


export default Input;