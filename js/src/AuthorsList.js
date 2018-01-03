import React from 'react';
import AuthorListItem from './AuthorListItem.js';
import CreateButton from './CreateButton.js';
import AddAuthorModal from './AddAuthorModal.js';



class AuthorsList extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            //tu funkcja z ajaxa
            authors: []
        }
    }

    componentDidMount() {
       this.Update();
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
                        <AuthorListItem update={(id) => this.Delete(id)} key={index} author={item}/>)
                        }
                    </tbody>
                </table>
                <AddAuthorModal/>
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

    Update()
    {
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=GetAll')
          .then(response => response.json())
          .then(json => {
            this.setState({ authors: json});
          });
    }


    addAuthor()
    {
        // var obj = {
        //     'first_name' : $('#addAuthorFirstName').val(),
        //     'last_name' :  $('#addAuthorLasttName').val(),
        //     'birth_date':  $('#addAuthorBirthDate').val(),
        //     'death_date' :  $('#addAuthorDeathDate').val(),
        //     'nationality' :  $('#addAuthorNationality').val(),
        //     'biography' :  $('#addAuthorDescription').val(),
        // };

        // var obj = {
        //     first_name : 'NOWY',
        //     last_name :  'NOWY',
        //     nationality :  'NOWY',
        //     description :  'NOWY',
        // };
        var first_name = "JSDJJ";
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=Add',
         {
            method : 'POST',
            body: first_name
         })
        .catch((e)=> alert(e)); 
           

    }
}

export default AuthorsList;