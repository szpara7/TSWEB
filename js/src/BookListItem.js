import React from 'react';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';
import DetailsButton from './DetailsButton.js';

class BookListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteBook() {
        this.props.deleteBook(this.props.book.id);
    }

    render() {
        return(                   
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.first_name+ ' ' + this.props.book.last_name}</td>
                <td>{this.props.book.name}</td>
                <td>                
                    <UpdateButton/><DeleteButton onClick={() => this.deleteBook()}/><DetailsButton/>
                </td>
            </tr>          
        )  
    }

}

export default BookListItem;