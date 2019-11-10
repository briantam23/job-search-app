import React from 'react';
import style from './jobDetailMain.css';
import Cities from '../../shared/cities/Cities';


const JobDetailMain = ({ job }) => {
    const { interest, title, cities } = job;
    return (
        <div className={ style.jobDetailMainContainer }>
            <h5>{ interest }</h5>
            <h2>{ title }</h2>
            <Cities cities={ cities }/>
            <button>Apply Now</button>
        </div>
    )
}


export default JobDetailMain;