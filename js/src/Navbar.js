import React from "react";
import ReactDOM from 'react-dom';
import {NavLink, HashRouter} from 'react-router-dom';

class Navbar extends React.Component {
    
    render(){
        return(
            <HashRouter>
                <div className="btn-group-lg">
                    <a href="#" className="btn btn-dark"><NavLink to = "/"/>Books</a>
                    <a href="#" className="btn btn-dark"><NavLink to = "/authors"/>Authors</a>
                    <a href="#" className="btn btn-dark"><NavLink to = "/genre"/>Genres</a>
                </div>
            </HashRouter>
        )
    }
} 

export default Navbar;