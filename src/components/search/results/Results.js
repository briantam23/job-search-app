import React from 'react';
import style from './results.css';
import { Link } from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import ResultsTotal from './resultsTotal/ResultsTotal';
import ResultsList from './resultsList/ResultsList';
import { searchKeywords, searchFilter } from '../../../utils';


const Results = ({ jobs, search }) => {
    // if there is a query param
    if(search) {
        search = search.replace(/%20/g, ' ');

        search.slice(1, 6) === 'query'
            ? jobs = searchKeywords(search.slice(7), jobs)
            // Use split with regex to separate by param & value
            : jobs = searchFilter(search.split(/[?=]/), jobs)
    }
    return (
        <div className={ style.resultsContainer }>
            <ResultsTotal jobs={ jobs }/>
            <ResultsList jobs={ jobs }/>
        </div> 
    )
}


export default Results;