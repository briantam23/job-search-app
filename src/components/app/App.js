import React from 'react';
import style from './app.css';
import Search from '../search/Search';


const App = () => {
    return (
        <div className={ style.mainContainer }>
            <Search/>
        </div>
    )
}


export default App;