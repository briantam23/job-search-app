import React from 'react';
import style from './jobDetailQualifications.css';
import ReactHtmlParser from 'react-html-parser';


const JobDetailQualifications = ({ job }) => {
    return (
        <div className={ style.jobDetailQualifications }>
            <h4>Qualifications</h4>
            { ReactHtmlParser(job.yourBackground) }
        </div>
    )
}


export default JobDetailQualifications;