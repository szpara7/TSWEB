import React from 'react';
import GenreListItem from './GenreListItem.js';
import CreateButton from './CreateButton.js';
import AddGenreModal from './AddGenreModal.js';
import UpdateGenreModal from './UpdateGenreModal.js';



class GenresList extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            genres: []
        }

        this.AddGenre = this.AddGenre.bind(this);
        this.UpdateGenre = this.UpdateGenre.bind(this);
        this.GetAll = this.GetAll.bind(this);
    }

    componentDidMount() {
         this.GetAll();
    }

    GetAll() {
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
            url : '/genres/' + id,
            success : function() {                
                alert('Usunięto rekord');
                self.GetAll();
            } 
        });
    }

    AddGenre(genre) {

        var obj = {
            name : genre.name
        };

        obj = JSON.stringify(obj);

        var self = this;        
        $.ajax({
            type : "POST",
            url : "/genres",
            data : obj,
            success : function() {
                $("#addGenreModal").modal('hide');
                alert("Dodano rekord");  
                self.GetAll();
            },
            error : function() {
                alert('Wystąpił błąd podczas dodawania rekordu!');
            }
        });
    }

     UpdateGenre(genre) {

        var obj = {
            id : genre.id,
            name : genre.name
        };

        obj = JSON.stringify(obj);

        var self = this;        
        $.ajax({
            type : "PUT",
            url : "/genres",
            data : obj,
            success : function() {
                $("#updateGenreModal").modal('hide');
                alert("Edytowano rekord");  
                self.GetAll();
            },
            error : function() {
                alert('Wystąpił błąd podczas edytowania rekordu!');
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
                <UpdateGenreModal handleSubmit={(i) => this.UpdateGenre(i)}/>
            </div>
        )
    }
}

export default GenresList;