import React from 'react';
import style from './jobDetailWhat.css';
import ReactHtmlParser from 'react-html-parser';


const JobDetailWhat = ({ job }) => {
    return (
        <div className={ style.jobDetailWhatContainer }>
            <h4>WHAT YOU'LL DO</h4>
            { ReactHtmlParser(job.whatYouWillDo) }
            <hr/>
        </div>
    )
}


export default JobDetailWhat;
