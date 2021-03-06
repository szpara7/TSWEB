import React from "react";
import ReactDOM from 'react-dom';
import {NavLink, HashRouter} from 'react-router-dom';

class Navbar extends React.Component {
    
    render(){
        return(
            <div className="m-2 header">
         
                <div className="btn-group-lg">
                    <NavLink className="btn btn-dark" to = "/">KSIĄŻKI</NavLink>
                    <NavLink className="btn btn-dark" to = "/authors">AUTORZY</NavLink>
                    <NavLink className="btn btn-dark" to = "/genres">GATUNKI</NavLink>
                </div>
          
            </div>
        )
    }
} 

export default Navbar;