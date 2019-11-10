import React from 'react';
import style from './result.css';
import { Link } from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import Cities from '../../shared/cities/Cities';


const Results = ({ jobs }) => {
    return (
        <div className={ style.resultsContainer }>
        {
            jobs.map(job => (
                <div key={ job.jobID }>
                    <h5>{ job.interest }</h5>
                    <h2>
                        <Link to={ `/jobs/${job.jobID}` }>{ job.title }</Link>
                    </h2>
                    <TruncateMarkup lines={ 2 } tokenize='words'>
                        <div>
                        { 
                            job.whatYouWillDo
                                .replace(/<p>|<div>/g, '')
                                .replace(/&nbsp;|<\/p>|<\/div>/g, ' ') 
                                .replace(/&#39;/g, '\'') 
                        }
                        </div>
                    </TruncateMarkup>
                    <Cities cities={ job.cities }/>
                    <hr/>
                </div>
            )) 
        }
        </div> 
    )
}


export default Results;