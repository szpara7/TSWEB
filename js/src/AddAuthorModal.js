import React from 'react';


class AddAuthorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            first_name: '',
            last_name: '',
            birth_date: '',
            death_date: '',
            description: '',
            nationality: ''
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
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            birth_date: this.state.birth_date,
            death_date: this.state.death_date,
            nationality: this.state.nationality,
            description : this.state.description
        };      

        e.preventDefault();
        this.props.addAuthor(obj);

        this.setState({
            first_name : '',
            last_name: '',
            birth_date: 'rrrr-MM-mm',
            death_date : 'rrrr-MM-mm',
            nationality: '',
            description: ''
        });
    }

    render() {
        return(
            <div className="modal fade" id="addAuthorModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Dodaj autora</h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Imię:</label>
                                    <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleInputChange} name="first_name" required/>
                                </div>
                                <div className="form-group">
                                    <label>Nazwisko:</label>
                                    <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleInputChange} name="last_name" required/>
                                </div>
                                <div className="form-group">
                                    <label>Data urodzenia:</label>
                                    <input type="date" className="form-control" value={this.state.birth_date} onChange={this.handleInputChange} name="birth_date" required/>
                                </div>
                                <div className="form-group">
                                    <label>Data śmierci:</label>
                                    <input type="date" className="form-control" value={this.state.death_date} onChange={this.handleInputChange} name="death_date" />
                                </div>
                                <div className="form-group">
                                    <label>Narodowość:</label>
                                    <input type="text" className="form-control" value={this.state.nationality} onChange={this.handleInputChange} name="nationality" required/>
                                </div>
                                <div className="form-group">
                                    <label>Życiorys:</label>
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

export default AddAuthorModal;