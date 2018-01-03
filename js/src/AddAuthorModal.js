import React from 'react';


class AddAuthorModal extends React.Component {
    render() {
        return(
            <div className="modal fade" id="addAuthorModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Dodaj autora</h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <form id='addAuthorForm' method='POST'>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Imię:</label>
                                    <input type="text" className="form-control" id="addAuthorFirstName" placeholder="Imię" name="first_name" required/>
                                </div>
                                <div class="form-group">
                                    <label>Nazwisko:</label>
                                    <input type="text" className="form-control" id="addAuthorLastName" placeholder="Nazwisko" name="last_name" required/>
                                </div>
                                <div class="form-group">
                                    <label>Data urodzenia:</label>
                                    <input type="date" className="form-control" id="addAuthorDateBirth" placeholder="Data urodzenia" name="date_birth" required/>
                                </div>
                                <div class="form-group">
                                    <label>Data śmierci:</label>
                                    <input type="date" className="form-control" id="addAuthorDeathBirth" placeholder="Data śmierci" />
                                </div>
                                <div class="form-group">
                                    <label>Narodowość:</label>
                                    <input type="text" className="form-control" id="addAuthorNationality" placeholder="Narodowość" name="nationality" required/>
                                </div>
                                <div class="form-group">
                                    <label>Życiorys:</label>
                                    <textarea type="text" className="form-control" id="addAuthorDescription" placeholder="Życiorys" name="description" required/>
                                </div>
                            </div>
                            
                        
                            <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Anuluj</button>
                            <button type="submit" className="btn btn-outline-success" data-dismiss="modal">Dodaj</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAuthorModal;