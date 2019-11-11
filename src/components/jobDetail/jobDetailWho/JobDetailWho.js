import React from 'react';
import style from './jobDetailWho.css';
import ReactHtmlParser from 'react-html-parser';


const JobDetailWho = ({ job }) => {
    return (
        <div className={ style.jobDetailWhoContainer }>
            <h4>WHO YOU'LL WORK WITH</h4>
            { ReactHtmlParser(job.whoYouWillWorkWith) }
            <hr/>
        </div>
    )
}


export default JobDetailWho;
