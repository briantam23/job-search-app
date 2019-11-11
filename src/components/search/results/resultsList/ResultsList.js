import React from 'react';
import style from './resultsList.css';
import { Link } from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import Cities from '../../../shared/cities/Cities';


const ResultsList = ({ jobs }) => {
    return (
        <div className={ style.resultsListContainer }>
        {
            jobs.map(job => (
                <div key={ job.jobID }>
                    <h5>{ job.interest }</h5>
                    <h2>
                        <Link to={ `/jobs/${job.friendlyURL}` }>{ job.title }</Link>
                    </h2>
                    <TruncateMarkup lines={ 2 } tokenize='words'>
                        <p>
                        { 
                            job.whatYouWillDo
                                .replace(/<p>|<div>/g, '')
                                .replace(/&nbsp;|<\/p>|<\/div>/g, ' ') 
                                .replace(/&#39;/g, '\'') 
                        }
                        </p>
                    </TruncateMarkup>
                    <Cities cities={ job.cities }/>
                    <hr/>
                </div>
            )) 
        }
        </div> 
    )
}


export default ResultsList;