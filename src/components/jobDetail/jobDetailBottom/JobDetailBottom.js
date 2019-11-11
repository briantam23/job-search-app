import React from 'react';
import style from './jobDetailBottom.css';
import IndustriesFunctions from '../../shared/industriesFunctions/IndustriesFunctions';
import Button from '../../shared/button/Button';


const JobDetailBottom = ({ job }) => {
    const { industries, functions } = job;
    return (
        <div className={ style.jobDetailBottomContainer }>
            <div className={ style.jobDetailBottomContainer1 }>
                <h5>McKinsey & Company is an equal opportunity employer.</h5>
            </div>
            <hr/>
            <div className={ style.jobDetailBottomContainer2 }>     
                <IndustriesFunctions data={ industries } dataType='Industries'/>
                <IndustriesFunctions data={ functions } dataType='Functions'/>
            </div>
            <div className={ style.jobDetailBottomContainer3 }>     
                <Button text='Apply Now'/>
            </div>
        </div>
    )
}


export default JobDetailBottom;
