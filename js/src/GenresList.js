import React from 'react';
import GenreListItem from './GenreListItem.js';
import CreateButton from './CreateButton.js';



class AuthorsList extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            //tu funkcja z ajaxa
            genres: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/switcher/GenreSwitcher.php?q=GetAll')
          .then(response => response.json())
          .then(json => {
            this.setState({ genres: json});
          });
        }

    render() {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">GATUNKI</div>
                    <div className="offset-lg-8 col-lg-2 pt-2 float-right"><CreateButton/></div>
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
                        <GenreListItem key={index} genre={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AuthorsList;