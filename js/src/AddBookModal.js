import React from 'react';

class AddBookModal extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        title : '',
        isbn : '',
        page_count : '',
        year : '',
        author_id : '',
        genre_id : '',
        description : '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}



handleInputChange(e) {
    var name = e.target.name;
    var value = e.target.value;

    this.setState({
        [name] : value
    });
}

handleSubmit(e) {

    var obj = {
        title : this.state.title,
        isbn : this.state.isbn,
        page_count : this.state.page_count,
        year : this.state.year,
        author_id : this.state.author_id,
        genre_id : this.state.genre_id,
        description : this.state.description
    };

    e.preventDefault();
    this.props.AddBook(obj);

    this.setState({
        title : '',
        isbn : '',
        page_count : '',
        year : 'yyyy-MM-mm',
        author_id : '',
        genre_id : '',
        description : '',
    });
}

render() {
    return(
        <div className="modal fade" id="addBookModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                
                
                    <div className="modal-header">
                    <h4 className="modal-title">Dodaj książkę</h4>
                    <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Tytuł:</label>
                                <input type="text" className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" required/>
                            </div>
                            <div className="form-group">
                                <label>ISBN:</label>
                                <input type="text" className="form-control" value={this.state.isbn} onChange={this.handleInputChange} name="isbn" required/>
                            </div>
                            <div className="form-group">
                                <label>Page count:</label>
                                <input type="text" className="form-control" value={this.state.page_count} onChange={this.handleInputChange} name="page_count" required/>
                            </div>
                            <div className="form-group">
                                <label>Rok wydania:</label>
                                <input type="date" className="form-control" value={this.state.year} onChange={this.handleInputChange} name="year" required/>
                            </div>
                            <div className="form-group">
                                <label>Autor:</label>
                                <select className="form-control" value={this.state.author_id} onChange={this.handleInputChange} name="author_id" required>
                                <option disabled selected></option>
                                {
                                       this.props.authors.map((item,index) =>
                                            <option value={item.id} key={index}>{item.first_name + ' ' + item.last_name}</option>)
                                   }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Gatunek:</label>
                                <select className="form-control" value={this.state.genre_id} onChange={this.handleInputChange} name="genre_id" required>
                                <option disabled selected></option>
                                    {
                                        this.props.genres.map((item,index) => 
                                            <option value={item.id} key={index}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                       
                            <div className="form-group">
                                <label>Opis:</label>
                                <textarea type="text" className="form-control" value={this.state.description} onChange={this.handleInputChange} name="description" required/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Anuluj</button>
                            <button type="submit" className="btn btn-outline-success">Dodaj</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


}

export default AddBookModal;