import React from 'react';
import style from './jobDetailMain.css';
import Cities from '../../shared/cities/Cities';
import Button from '../../shared/button/Button';


const JobDetailMain = ({ job }) => {
    const { interest, title, cities, jobApplyURL } = job;
    return (
        <div className={ style.jobDetailMainContainer }>
            <h5>{ interest }</h5>
            <h2>{ title }</h2>
            <hr/>
            <div className={ style.citiesContainer }>
                <Cities cities={ cities }/>
            </div>
            <div className={ style.buttonContainer }>
                <Button text='Apply Now' link={ jobApplyURL }/>
            </div>
        </div>
    )
}


export default JobDetailMain;