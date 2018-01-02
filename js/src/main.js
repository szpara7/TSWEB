import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import AuthorsList from './AuthorsList';

class App extends React.Component {
    render(){
        return(
            <div className = "row">
               <Navbar/>
               <AuthorsList/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

