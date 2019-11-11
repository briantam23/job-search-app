import React from 'react';
import style from './app.css';
import { HashRouter as Router, Route, } from 'react-router-dom';
import Search from '../search/Search';
import JobDetail from '../jobDetail/JobDetail';
import jobs from '../../../frontendchallenge.json';


const App = () => {
    return (
        <Router>
            <div className={ style.mainContainer }>
                <Route exact path='/jobs/:jobFriendlyURL' render={ ({ match }) => <JobDetail jobs={ jobs } params={ match.params }/> }/>
                <Route path='/' render={ ({ match, history, location }) => <Search jobs={ jobs } params={ match } history={ history } search={ location.search }/> }/>
            </div>
        </Router>
    )
}


export default App;