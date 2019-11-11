import React, { useState } from 'react';
import style from './inputFilter.css';
import { Link } from 'react-router-dom';
import { findDataType, findFilteredItems } from '../../../utils';


const InputFilter = ({ jobs, filter }) => {
    let list = [];
    let dataType = findDataType(filter);
    if(jobs.length) list = findFilteredItems(jobs, dataType);

    return (
        <div className={ style.inputFilterContainer }>
            <div className={ style.inputFilterButton }>
                <input placeholder={ filter } disabled/>
                <button>+</button>
            </div>
            <div className={ style.inputFilterList }>
            {
                list.map((el, idx) => (
                    <Link to={`/?${dataType}=${el}`} key={ idx }>
                        { el }
                    </Link>
                ))
            }
            </div>
        </div>
    )
}


export default InputFilter;