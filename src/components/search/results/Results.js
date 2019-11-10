import React from 'react';
import style from './result.css';
import TruncateMarkup from 'react-truncate-markup';


const Results = ({ jobs }) => {
    //console.log(jobs)
    return (
        <div className={ style.resultsContainer }>
        {
            jobs.map(job => (
                <div key={ job.jobID }>
                    <h5>{ job.interest }</h5>
                    <h2>{ job.title }</h2>
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
                    <div className={ style.citiesContainer }>
                        <h5>
                            <i className="fa fa-map-marker"/>
                        </h5>
                        { job.cities.slice(0, 7).map((city, idx) => <h5 key={ idx }>{ city } | </h5>) }
                        <h5 className={ style.moreCities }>+{ job.cities.length - 7 } More</h5>
                    </div>
                    <hr/>
                </div>
            )) 
        }
        </div> 
    )
}


export default Results;