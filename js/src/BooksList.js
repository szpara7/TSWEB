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
        this.GetAll = this.GetAll.bind(this);
        this.GetAuthors = this.GetAuthors.bind(this);
        this.GetGenres = this.GetGenres.bind(this);
    }

    componentDidMount() {
       this.GetAll();
       this.GetAuthors();
       this.GetGenres();
    }

    GetAll() {
        var self = this;
        $.ajax({
            type : 'GET',
            url : '/books',
            success: function(data) {
                var booksData = JSON.parse(data);
                self.setState({
                    books : booksData
                }); 
            },
            error : function() {
                alert("Coś poszło nie tak");
            }
        });          
    }

    GetAuthors() {
        var self = this;
        $.ajax({
            type : 'GET',
            url : '/authors',
            success: function(data) {
                var authorsData = JSON.parse(data);
                self.setState({
                    authors : authorsData
                }); 
            },
            error : function() {
                alert("Coś poszło nie tak");
            }
        });          
    }

    GetGenres() {
        var self = this;
        $.ajax({
            type : 'GET',
            url : '/genres',
            success: function(data) {
                var genresData = JSON.parse(data);
                self.setState({
                    genres : genresData
                }); 
            },
            error : function() {
                alert("Coś poszło nie tak");
            }
        });          
    }

    Delete(id) {
        var self = this;
        $.ajax({
            type : 'DELETE',
            url : '/books/' + id,
            success : function() {                
                alert('Usunięto rekord');
                self.GetAll();
            } 
        });
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

        var obj = {
            title : book.title,
                isbn : book.isbn,
                page_count : book.page_count,
                year : book.year,
                author_id : book.author_id,
                genre_id : book.genre_id,
                description : book.description
        };

        obj = JSON.stringify(obj);

        $.ajax({
            type : "POST",
            url : "/books",
            data : obj,
            success: function() {
                $("#addBookModal").modal("hide");
                alert("Dodano nowy rekord");
                self.GetAll();
            },
            error : function() {
                alert("Wystąpił problem podczas dodawania rekordu");
            }
        });
    }

    UpdateBook(book) {
        var self = this;

        var obj = {
                id : book.id,
                title : book.title,
                isbn : book.isbn,
                page_count : book.page_count,
                year : book.year,
                author_id : book.author_id,
                genre_id : book.genre_id,
                description : book.description
        };

        obj = JSON.stringify(obj);

        $.ajax({
            type : "PUT",
            url : "/books",
            data : obj,
            success: function() {
                $("#updateBookModal").modal("hide");
                alert("Edytowano rekord");
                self.GetAll();
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