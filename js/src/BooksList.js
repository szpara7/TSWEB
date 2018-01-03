import React from 'react';
import BookListItem from './BookListItem.js';
import CreateButton from './CreateButton.js';
import DeleteButton from './DeleteButton.js';
import UpdateButton from './UpdateButton.js';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount() {
       this.Update();
    }

    Update() {
        fetch('http://localhost:8080/switcher/BookSwitcher.php?q=GetAll')
        .then(response => response.json())
        .then(response => {
            this.setState({books: response});
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

    render () {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">KSIĄŻKI</div>
                    <div className="offset-lg-8 col-lg-2 pt-2 float-right"><CreateButton/></div>
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
                        <BookListItem deleteBook={(id) => this.Delete(id)} key={index} book={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BooksList;