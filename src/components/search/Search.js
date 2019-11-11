import React, { Fragment } from 'react';
import Input from './input/Input';
import Results from './results/Results';


const Search = ({ jobs, history, search }) => {
    return (
        <Fragment>
            <Input jobs={ jobs } history={ history }/>
            <Results jobs={ jobs } search={ search }/>
        </Fragment>
    )
}


export default Search;