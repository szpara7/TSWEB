import React from 'react';
import AuthorListItem from './AuthorListItem.js';
import CreateButton from './CreateButton.js';
import AddAuthorModal from './AddAuthorModal.js';
import AuthorDetailsModal from './AuthorDetailsModal.js';
import UpdateAuthorModal from './UpdateAuthorModal.js';




class AuthorsList extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            //tu funkcja z ajaxa
            authors: []
        }

        this.addAuthor = this.addAuthor.bind(this);
        this.UpdateAuthor = this.UpdateAuthor.bind(this);
    }

    componentDidMount() {
       this.GetAll();
        }

    render() {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">AUTORZY</div>
                    <div className="offset-lg-8 col-lg-2 pt-2 float-right"><CreateButton modalId="#addAuthorModal"/></div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.authors.map((item,index)=>
                        <AuthorListItem handleDetailsClick={(author) => this.Details(author)} update={(id) => this.Delete(id)} key={index} author={item}/>)
                        }
                    </tbody>
                </table>
                <AddAuthorModal addAuthor={(author) => this.addAuthor(author)}/>    
                <AuthorDetailsModal/>   
                <UpdateAuthorModal handleSubmit={(i) => this.UpdateAuthor(i)}/>       
            </div>
        )
    }
    
    Delete(id)
    {
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=Delete&id='+id)
       .then(res => res.json())
       .then(json => {
            this.setState({ authors: json});
       });
       alert('Usunięto rekord');
    }

    GetAll()
    {
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=GetAll')
          .then(response => response.json())
          .then(json => {
            this.setState({ authors: json});
          });
          
    }

    Details(author) {
        $("#detailTitle").text(author.first_name+ ' ' + author.last_name);
        $("#detailDescritpion").text(author.description);
        $("#detailBirthDate").text(author.date_birth);
        $("#detailDeathDate").text(author.date_death);
        $("#detailNationality").text(author.nationality);

        $('#authorDetailsModal').modal('show');

    }

    

    addAuthor(author)
    {
      var self = this;
        $.ajax({
            type: "POST",
            url : "switcher/AuthorSwitcher.php?q=Add",
            data: {
                first_name : author.first_name,
                last_name : author.last_name,
                description : author.description,
                nationality : author.nationality,
                birth_date : author.birth_date,
                death_date : author.death_date
            },
            success: function(data) {    
                var authorsData = JSON.parse(data);
                $("#addAuthorModal").modal('hide');
                alert("Dodano nowy rekord");  
                self.setState({
                    authors: authorsData
                });
            },
            error: function() {
                alert("Wystąpił problem podczas dodawania rekordu");
            }
        }); 
    }

    UpdateAuthor(author) {
        var self = this;
        $.ajax({
            type: "POST",
            url : "switcher/AuthorSwitcher.php?q=Update",
            data: {
                first_name : author.first_name,
                last_name : author.last_name,
                description : author.description,
                nationality : author.nationality,
                birth_date : author.birth_date,
                death_date : author.death_date,
                id : author.id
            },
            success: function(data) {    
                var authorsData = JSON.parse(data);
                $("#updateAuthorModal").modal('hide');
                alert("Edytowano rekord");  
                self.setState({
                    authors: authorsData
                });
            },
            error: function() {
                alert("Wystąpił problem podczas edytowania rekordu");
            }
        }); 
    }
}

export default AuthorsList;