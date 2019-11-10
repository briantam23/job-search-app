import React from 'react';
import style from './jobDetail.css';
import JobDetailMain from './jobDetailMain/JobDetailMain';
import JobDetailQualifications from './jobDetailQualifications/JobDetailQualifications'
import JobDetailWho from './jobDetailWho/JobDetailWho';


const JobDetail = ({ jobs, params }) => {
    const job = jobs.find(job => job.jobID === params.jobID);
    return (
        <div className={ style.jobDetailContainer }>
            <JobDetailMain job={ job }/>
            <JobDetailQualifications job={ job }/>
            <JobDetailWho job={ job }/>
        </div>
    )
}


export default JobDetail;