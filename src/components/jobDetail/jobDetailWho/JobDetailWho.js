import React from 'react';
import style from './jobDetailWho.css';
import ReactHtmlParser from 'react-html-parser';


const JobDetailWho = ({ job }) => {
    return (
        <div className={ style.jobDetailWhoContainer }>
            { ReactHtmlParser(job.whoYouWillWorkWith) }
        </div>
    )
}


export default JobDetailWho;
