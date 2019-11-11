import React from 'react';
import style from './resultsTotal.css';


const ResultsTotal = ({ jobs }) => {
    return (
        <div className={ style.resultsTotalContainer }>
            <h1>{ jobs.length }</h1>
            <h4>Jobs Available</h4>
            <p>&#x2B07;</p>
        </div>
    )
}


export default ResultsTotal;