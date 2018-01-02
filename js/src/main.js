import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter, NavLink} from 'react-router-dom';
import Navbar from './Navbar.js';
import AuthorsList from './AuthorsList.js';
import BooksList from './BooksList.js';
import GenresList from './GenresList.js';

class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <div className="row">
                <Navbar/>   
                <Route exact path='/' component={BooksList}/>                
                 <Route path='/authors' component={AuthorsList}/>      
                 <Route path='/genres' component={GenresList}/>                  
                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

