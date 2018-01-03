import React from 'react';

class BookDetailsModal extends React.Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            
            <div className="modal fade" id="bookDetailsModal">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title" id='detailTitleBook'></h4>
                        <button type="button" className="close btn-danger" data-dismiss="modal">&times;</button>
                        </div>
                        
                    
                        <div className="modal-body container">
                            <form className="form-horizontal row">
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-6 font-weight-bold">Autor:</label>
                                    <div className="col-lg-6">
                                        <p className="form-control-static" id="detailAuthor"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">Rok wydania:</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static" id="detailYear"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">Ilość stron:</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static " id="detailPageCount"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                    <label className="control-label col-lg-2 font-weight-bold">ISBN:</label>
                                    <div className="col-lg-10">
                                        <p className="form-control-static" id="detailISBN"></p>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12">
                                <label className="control-label col-lg-2 font-weight-bold">Opis:</label>
                                <div className="col-lg-10">
                                    <p className="form-control-static" id="detailDescritpionBook"></p>
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

export default BookDetailsModal;