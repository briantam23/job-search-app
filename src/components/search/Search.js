import React, { Fragment } from 'react';
import Input from './input/Input';
import Results from './results/Results';
import jobs from '../../../frontendchallenge.json';


const Search = () => {
    return (
        <Fragment>
            <Input jobs={ jobs }/>
            <Results jobs={ jobs }/>
        </Fragment>
    )
}


export default Search;