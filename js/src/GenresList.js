import React from 'react';
import GenreListItem from './GenreListItem.js';
import CreateButton from './CreateButton.js';
import AddGenreModal from './AddGenreModal.js';



class AuthorsList extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            //tu funkcja z ajaxa
            genres: []
        }

        this.AddGenre = this.AddGenre.bind(this);
    }

    componentDidMount() {
         this.Update();
    }

    Update() {
        fetch('http://localhost:8080/switcher/GenreSwitcher.php?q=GetAll')
        .then(response => response.json())
        .then(json => {
            this.setState({ genres: json});
        });
    }

    Delete(id) {
        fetch('http://localhost:8080/switcher/GenreSwitcher.php?q=Delete&id='+id)
       .then(res => res.json())
       .then(json => {
            this.setState({ genres: json});
       });
       alert('Usunięto rekord');
    }

    AddGenre(genre) {

        var self = this;        
        $.ajax({
            type : "POST",
            url : "switcher/GenreSwitcher.php?q=Add",
            data : {
                name : genre.name
            },
            success : function(data) {
                var genresData = JSON.parse(data);
                $("#addGenreModal").modal('hide');
                alert("Dodano nowy rekord");  
                self.setState({
                    genres: genresData
                });
            },
            error : function() {
                alert('Wystąpił błąd podczas dodawania rekordu!');
            }
        });
    }

    render() {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">GATUNKI</div>
                    <div className="offset-lg-8 col-lg-2 pt-2 float-right"><CreateButton modalId="#addGenreModal"/></div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Nazwa gatunku</th>
                            <th>Liczba książek w gatunku</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.genres.map((item,index)=>
                        <GenreListItem deleteGenre={(id) => this.Delete(id)} key={index} genre={item}/>)
                        }
                    </tbody>
                </table>
                <AddGenreModal addGenre={(item) => this.AddGenre(item)} />
            </div>
        )
    }
}

export default AuthorsList;