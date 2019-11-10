import React from 'react';
import style from './jobDetail.css';
import JobDetailMain from './jobDetailMain/JobDetailMain';

const JobDetail = ({ jobs, params }) => {
    const job = jobs.find(job => job.jobID === params.jobID);
    return (
        <div className={ style.jobDetailContainer }>
            <JobDetailMain job={ job }/>
        </div>
    )
}


export default JobDetail;