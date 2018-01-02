import React from 'react';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';
import DetailsButton from './DetailsButton.js';

class GenreListItem extends React.Component {
    constructor(props) {
        super(props);
    }

        render() {
            return(                   
                <tr>                   
                    <td>{this.props.genre.name}</td>
                    <td>{this.props.genre.count}</td>
                    <td>                
                        <UpdateButton/><DeleteButton/><DetailsButton/>
                    </td>
                </tr>          
            )
        
    }

}

export default GenreListItem;