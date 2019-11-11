import React from 'react';
import style from './industriesFunctions.css';


const IndustriesFunctions = ({ data, dataType }) => {
    return (
        <div className={ style.industriesFunctionsContainer }>     
            <h5>{ dataType }</h5>
            <div className={ style.indFuncFlexContainer }>
                <h6>{ data[0] }</h6>
            {   // Render 'More' if more than 1 element
                data.length > 1 
                    ? <h6><a>+ { data.length - 1 } More</a></h6>
                    : null
            }
            </div>
        </div>
    )
}


export default IndustriesFunctions;
