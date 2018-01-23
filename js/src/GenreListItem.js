import React from 'react';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';
import DetailsButton from './DetailsButton.js';

class GenreListItem extends React.Component {
    constructor(props) {
        super(props);

        this.UpdateGenre = this.UpdateGenre.bind(this);
    }

    deleteGenre() {       
       this.props.deleteGenre(this.props.genre.id);
    }

    UpdateGenre() {
        $('#updateGenreModal').modal('show');
        $('#nameUpdateGenreModal').val(this.props.genre.name);
        $('#idUpdateGenreModal').val(this.props.genre.id);       
  
    }


    render() {
        return(                   
            <tr>                   
                <td>{this.props.genre.name}</td>
                <td>{this.props.genre.count}</td>
                <td>                
                    <UpdateButton onClick = {this.UpdateGenre}/><DeleteButton onClick={() => this.deleteGenre()}/>
                </td>
            </tr>          
        )                
    }  

}



export default GenreListItem;