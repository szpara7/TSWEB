import React from 'react';


class AddGenreModal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          name : ''
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
            name : this.state.name,
        };       

        e.preventDefault();
        this.props.addGenre(obj);

        this.setState({
            name : '',         
        });
    }

    render() {
        return(
            <div className="modal fade" id="addGenreModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Dodaj gatunek</h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Nazwa gatunku:</label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.handleInputChange} name="name" required/>
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

export default AddGenreModal;