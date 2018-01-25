import React from 'react';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';
import DetailsButton from './DetailsButton.js';

class BookListItem extends React.Component {
    constructor(props) {
        super(props);

        this.UpdateBook = this.UpdateBook.bind(this);
    }

    deleteBook() {
        this.props.deleteBook(this.props.book.id);
    }

    handleDetailsClick() {
        this.props.handleDetailsClick(this.props.book);
    }

    UpdateBook() {
        $("#updateBookModal").modal('show');
        $("#titleUpdateBook").val(this.props.book.title);
        $("#isbnUpdateBook").val(this.props.book.isbn);
        $("#page_countUpdateBook").val(this.props.book.page_count);
        $("#yearUpdateBook").val(this.props.book.year);
        $("#author_idUpdateBook").val(this.props.book.author_id);
        $("#genre_idUpdateBook").val(this.props.book.genre_id);
        $("#descriptionUpdateBook").val(this.props.book.description);
        $("#idUpdateBook").val(this.props.book.id);
    }

    render() {
        return(                   
            <tr>
                <td>{this.props.book.title}</td>
                <td>{this.props.book.first_name+ ' ' + this.props.book.last_name}</td>
                <td>{this.props.book.name}</td>
                <td>                
                    <UpdateButton onClick={() => this.UpdateBook()}/><DeleteButton onClick={() => this.deleteBook()}/><DetailsButton handleDetailsClick={() => this.handleDetailsClick()}/>
                </td>
            </tr>          
        )  
    }

}

export default BookListItem;