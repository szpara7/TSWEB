import React from "react";
import ReactDOM from 'react-dom';
import {NavLink, HashRouter} from 'react-router-dom';

class Navbar extends React.Component {
    
    render(){
        return(
            <div className="m-2 header">
            <HashRouter>
                <div className="btn-group-lg">
                    <a href="#" className="btn btn-dark"><NavLink to = "/"/>Books</a>
                    <a href="#" className="btn btn-dark"><NavLink to = "/authors"/>Authors</a>
                    <a href="#" className="btn btn-dark"><NavLink to = "/genre"/>Genres</a>
                </div>
            </HashRouter>
            </div>
        )
    }
} 

export default Navbar;