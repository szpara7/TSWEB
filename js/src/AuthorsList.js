import React from 'react';
import AuthorListItem from './AuthorListItem.js';
import CreateButton from './CreateButton.js';



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
        fetch('http://localhost:8080/switcher/AuthorSwitcher.php?q=GetAll')
          .then(response => response.json())
          .then(json => {
            this.setState({ authors: json});
          });
        }

    render() {
        return(
            <div className="col-lg-12">
                <div className="list_header">
                    <div className="col-lg-2 float-left align-text-top pt-3 font-weight-bold align-middle">AUTHORS</div>
                    <div className="offset-lg-8 col-lg-2 pt-3 float-right"><CreateButton/></div>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Imie</th>
                            <th>Nazwisko</th>
                            <th>Akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.authors.map((item,index)=>
                        <AuthorListItem key={index} author={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AuthorsList;