import React, { Fragment } from 'react';
import Input from './input/Input';
import Results from './results/Results';


const Search = ({ jobs }) => {
    return (
        <Fragment>
            <Input jobs={ jobs }/>
            <Results jobs={ jobs }/>
        </Fragment>
    )
}


export default Search;