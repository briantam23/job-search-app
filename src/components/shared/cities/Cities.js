import React from 'react';
import style from './cities.css';
import JobDetailMain from '../../jobDetail/jobDetailMain/JobDetailMain';


const Cities = ({ cities }) => {
    return (
        <div className={ style.citiesContainer }>
            <h5>
                <i className="fa fa-map-marker"/>
            </h5>
                { cities.slice(0, 7).map((city, idx) => <h5 key={ idx }>{ city } &ensp; |</h5>) }
            <h5 className={ style.moreCities }>+{ cities.length - 7 } More</h5>
        </div>
    )
}


export default Cities;