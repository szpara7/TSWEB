import React from 'react';


class UpdateGenreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          name : '',
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
            name : $("#nameUpdateGenreModal").val(),
            id : $("#idUpdateGenreModal").val(),
        };       
        

        e.preventDefault();
        this.props.handleSubmit(obj);

    }

    render() {
        return(
            <div className="modal fade" id="updateGenreModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Edytuj gatunek</h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nazwa gatunku:</label>
                                    <input id="nameUpdateGenreModal" type="text" className="form-control" onChange={this.handleInputChange} name="name" required/>
                                </div>                              
                            </div>           
                            <input type="hidden" name = "id" id="idUpdateGenreModal" required />                 
                        
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