import React from 'react';

class UpdateBookModal extends React.Component {
constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);  
}


handleSubmit(e) {

    var obj = {
        title : $("#titleUpdateBook").val(),
        isbn : $("#isbnUpdateBook").val(),
        page_count : $("#page_countUpdateBook").val(),
        year : $("#yearUpdateBook").val(),
        author_id : $("#author_idUpdateBook").val(),
        genre_id : $("#genre_idUpdateBook").val(),
        description : $("#descriptionUpdateBook").val(),
        id : $("#idUpdateBook").val()
    };

    e.preventDefault();
    this.props.UpdateBook(obj);
}

render() {
    return(
        <div className="modal fade" id="updateBookModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                
                
                    <div className="modal-header">
                    <h4 className="modal-title">Edytuj książkę</h4>
                    <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label>Tytuł:</label>
                                <input type="text" className="form-control" id="titleUpdateBook" name="title" required/>
                            </div>
                            <div className="form-group">
                                <label>ISBN:</label>
                                <input type="text" className="form-control" id="isbnUpdateBook" name="isbn" required/>
                            </div>
                            <div className="form-group">
                                <label>Page count:</label>
                                <input type="text" className="form-control" id="page_countUpdateBook" name="page_count" required/>
                            </div>
                            <div className="form-group">
                                <label>Rok wydania:</label>
                                <input type="date" className="form-control" id="yearUpdateBook"  name="year" required/>
                            </div>
                            <div className="form-group">
                                <label>Autor:</label>
                                <select className="form-control" id="author_idUpdateBook" name="author_id" required>
                                <option disabled selected></option>
                                {
                                       this.props.authors.map((item,index) =>
                                            <option value={item.id} key={index}>{item.first_name + ' ' + item.last_name}</option>)
                                   }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Gatunek:</label>
                                <select className="form-control" id="genre_idUpdateBook" name="genre_id" required>
                                <option disabled selected></option>
                                    {
                                        this.props.genres.map((item,index) => 
                                            <option value={item.id} key={index}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                       
                            <div className="form-group">
                                <label>Opis:</label>
                                <textarea type="text" className="form-control" id="descriptionUpdateBook" name="description" required/>
                            </div>
                            <input type="hidden" id="idUpdateBook" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Anuluj</button>
                            <button type="submit" className="btn btn-outline-success">Edytuj</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


}

export default UpdateBookModal;