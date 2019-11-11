import React, { Fragment } from 'react';
import style from './cities.css';
import JobDetailMain from '../../jobDetail/jobDetailMain/JobDetailMain';


const Cities = ({ cities }) => {
    return (
        <div className={ style.citiesContainer }>
            <h5>
                <i className="fa fa-map-marker"/>
            </h5>
            { 
                cities.slice(0, 7).map((city, idx) => (
                    <Fragment key={ idx }>
                        <h5>{ city }</h5> 
                    {   // Don't render '|' if we reached the last city 
                        cities.length - 1 !== parseInt(idx) 
                            ? <h5> |</h5> 
                            : null 
                    }
                    </Fragment>
                ))
            }
            { 
                cities.length > 7 
                    ? <h5><a>+{ cities.length - 7 } More</a></h5> 
                    : null 
            }
        </div>
    )
}


export default Cities;