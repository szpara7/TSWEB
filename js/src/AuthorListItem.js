import React from 'react';
import UpdateButton from './UpdateButton.js';
import DeleteButton from './DeleteButton.js';
import DetailsButton from './DetailsButton.js';

class AuthorListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(                   
            <tr>
                <td>{this.props.author.id}</td>
                <td>{this.props.author.first_name}</td>
                <td>{this.props.author.last_name}</td>
                <td>                
                    <UpdateButton/><DeleteButton/><DetailsButton/>
                </td>
            </tr>          
        )
    }

}


export default AuthorListItem;




