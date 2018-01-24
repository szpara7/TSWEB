import React from 'react';


class UpdateGenreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            first_name: '',
            last_name: '',
            birth_date: '',
            death_date: '',
            description: '',
            nationality: '',
            id : ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
       
        const value = event.target.value;
        const name = event.target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
     
        var obj = {
            first_name : $("#first_nameAuthorUpdate").val(),
            last_name : $("#last_nameAuthorUpdate").val(),
            birth_date : $("#birth_dateAuthorUpdate").val(),
            death_date : $("#death_dateAuthorUpdate").val(),
            nationality : $("#nationalityAuthorUpdate").val(),
            description : $("#descriptionAuthorUpdate").val(),
            id : $("#idAuthorUpdate").val(),
        };       

        e.preventDefault();
        this.props.handleSubmit(obj);

    }

    render() {
        return(
            <div className="modal fade" id="updateAuthorModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Edytuj autora</h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Imię:</label>
                                    <input type="text" className="form-control" id="first_nameAuthorUpdate" onChange={this.handleInputChange} name="first_name" required/>
                                </div>
                                <div class="form-group">
                                    <label>Nazwisko:</label>
                                    <input type="text" className="form-control" id="last_nameAuthorUpdate"  onChange={this.handleInputChange} name="last_name" required/>
                                </div>
                                <div class="form-group">
                                    <label>Data urodzenia:</label>
                                    <input type="date" className="form-control" id="birth_dateAuthorUpdate"  onChange={this.handleInputChange} name="birth_date" required/>
                                </div>
                                <div class="form-group">
                                    <label>Data śmierci:</label>
                                    <input type="date" className="form-control" id="death_dateAuthorUpdate"  onChange={this.handleInputChange} name="death_date" />
                                </div>
                                <div class="form-group">
                                    <label>Narodowość:</label>
                                    <input type="text" className="form-control" id="nationalityAuthorUpdate" onChange={this.handleInputChange} name="nationality" required/>
                                </div>
                                <div class="form-group">
                                    <label>Życiorys:</label>
                                    <textarea type="text" className="form-control" id="descriptionAuthorUpdate" onChange={this.handleInputChange} name="description" required/>
                                </div>
                                <input type="hidden" name="id" id="idAuthorUpdate" required />
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

export default UpdateGenreModal;