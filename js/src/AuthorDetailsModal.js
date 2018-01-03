import React from 'react';

class AuthorDetailsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            author : null
        }
    }

   
    render() {
        return (
            
            <div className="modal fade" id="authorDetailsModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title" id='detailTitle'></h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                    
                        <div className="modal-body container">
                            <form className="form-horizontal row">
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-6 font-weight-bold">Data urodzenia:</label>
                                    <div className="col-lg-6">
                                        <p className="form-control-static" id="detailBirthDate"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">Data śmierci:</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static" id="detailDeathDate"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">Narodowość:</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static " id="detailNationality"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">Życiorys</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static" id="detailDescritpion"></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                    
                        <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Zamknij</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthorDetailsModal;