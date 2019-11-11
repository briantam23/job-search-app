import React from 'react';
import style from './jobDetail.css';
import JobDetailMain from './jobDetailMain/JobDetailMain';
import JobDetailQualifications from './jobDetailQualifications/JobDetailQualifications'
import JobDetailWho from './jobDetailWho/JobDetailWho';
import JobDetailWhat from './jobDetailWhat/JobDetailWhat'; 
import JobDetailBottom from './jobDetailBottom/JobDetailBottom';


const JobDetail = ({ jobs, params }) => {
    const job = jobs.find(job => job.friendlyURL === params.jobFriendlyURL);
    return (
        <div>
            <JobDetailMain job={ job }/>
            <JobDetailQualifications job={ job }/>
            <JobDetailWho job={ job }/>
            <JobDetailWhat job={ job }/>
            <JobDetailBottom job={ job }/>
        </div>
    )
}


export default JobDetail;