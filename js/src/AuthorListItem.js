import React from 'react';
import UpdateButton from './UpdateButton.js';
import DeleteButton from './DeleteButton.js';
import DetailsButton from './DetailsButton.js';
import AuthorDetailsModal from './AuthorDetailsModal.js';

class AuthorListItem extends React.Component {
    constructor(props) {
        super(props);

        this.UpdateAuthor = this.UpdateAuthor.bind(this);
    }
    deleteAuthor()
    {
       this.props.update(this.props.author.id);
    }

    handleDetailsClick() {
        this.props.handleDetailsClick(this.props.author);
    }

    UpdateAuthor() {

        $("#updateAuthorModal").modal('show');
        $("#first_nameAuthorUpdate").val(this.props.author.first_name),
        $("#last_nameAuthorUpdate").val(this.props.author.last_name),
        $("#first_nameAuthorUpdate").val(this.props.author.first_name),
        $("#birth_dateAuthorUpdate").val(this.props.author.date_birth),
        $("#death_dateAuthorUpdate").val(this.props.author.date_death),
        $("#nationalityAuthorUpdate").val(this.props.author.nationality),
        $("#descriptionAuthorUpdate").val(this.props.author.description),
        $("#idAuthorUpdate").val(this.props.author.id)
    }

    render() {
        return(                   
            <tr>
                <td>{this.props.author.first_name}</td>
                <td>{this.props.author.last_name}</td>
                <td>                
                    <UpdateButton onClick={this.UpdateAuthor}/><DeleteButton onClick={() => this.deleteAuthor()}/><DetailsButton handleDetailsClick={() => this.handleDetailsClick()}/>
                </td>
            </tr>          
        )
    }   
}

export default AuthorListItem;




