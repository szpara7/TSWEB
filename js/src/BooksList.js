import React from 'react';
import BookListItem from './BookListItem.js';
import CreateButton from './CreateButton.js';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';
import BookDetailsModal from './BookDetailsModal.js';
import AddBookModal from './AddBookModal.js';
import UpdateBookModal from './UpdateBookModal.js';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            genres: []
        };
        
        this.UpdateBook = this.UpdateBook.bind(this);
    }

    componentDidMount() {
       this.GetAll();
       this.GetAuthors();
       this.GetGenres();
    }

    GetAll() {
        fetch('http://localhost:8080/switcher/BookSwitcher.php?q=GetAll')
        .then(response => response.json())
        .then(response => {
            this.setState({books: response});
        });
    }

    GetAuthors() {
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=GetAll')
        .then(response => response.json())
        .then(json => {
          this.setState({ authors: json});
        });
    }

    GetGenres() {
        fetch('http://localhost:8080/switcher/GenreSwitcher.php?q=GetAll')
        .then(response => response.json())
        .then(json => {
          this.setState({ genres: json});
        });
    }

    Delete(id) {
        fetch('http://localhost:8080/switcher/BookSwitcher.php?q=Delete&id='+id)
        .then(response => response.json())
        .then(response => {
            this.setState({books: response});
        });
        alert("Usunięto rekord");
    }

    Details(book) {

        $("#detailTitleBook").text(book.title);
        $("#detailDescritpionBook").text(book.description);
        $("#detailISBN").text(book.isbn);
        $("#detailPageCount").text(book.page_count);
        $("#detailYear").text(book.year);
        $("#detailAuthor").text(book.first_name + ' ' + book.last_name);

        $('#bookDetailsModal').modal('show');

    }

    AddBook(book) {
        var self = this;

        $.ajax({
            type : "POST",
            url : "switcher/BookSwitcher.php?q=Add",
            data : {
                title : book.title,
                isbn : book.isbn,
                page_count : book.page_count,
                year : book.year,
                author_id : book.author_id,
                genre_id : book.genre_id,
                description : book.description
            },
            success: function(data) {
                var booksData = JSON.parse(data);
                $("#addBookModal").modal("hide");
                alert("Dodano nowy rekord");
                self.setState({
                    books : booksData
                });
            },
            error : function() {
                alert("Wystąpił problem podczas dodawania rekordu");
            }
        });
    }

    UpdateBook(book) {
        var self = this;

        $.ajax({
            type : "POST",
            url : "switcher/BookSwitcher.php?q=Update",
            data : {
                title : book.title,
                isbn : book.isbn,
                page_count : book.page_count,
                year : book.year,
                author_id : book.author_id,
                genre_id : book.genre_id,
                description : book.description,
                id : book.id
            },
            success: function(data) {
                var booksData = JSON.parse(data);
                $("#updateBookModal").modal("hide");
                alert("Edytowano rekord");
                self.setState({
                    books : booksData
                });
            },
            error : function() {
                alert("Wystąpił problem podczas edytowania rekordu");
            }
        });
    }

    render () {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">KSIĄŻKI</div>
                    <div className="offset-lg-8 col-lg-2 pt-2 float-right"><CreateButton modalId="#addBookModal"/></div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Tytuł</th>
                            <th>Autor</th>
                            <th>Gatunek</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map((item,index)=>
                        <BookListItem handleDetailsClick={(book) => this.Details(book)} deleteBook={(id) => this.Delete(id)} key={index} book={item}/>)
                        }
                    </tbody>
                </table>
                <BookDetailsModal/>
                <AddBookModal AddBook={(i) => this.AddBook(i)} genres={this.state.genres} authors={this.state.authors}/>
                <UpdateBookModal UpdateBook={(book) => this.UpdateBook(book)} genres={this.state.genres} authors={this.state.authors}/>
            </div>
        )
    }
}

export default BooksList;