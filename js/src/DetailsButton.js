import React from 'react';

class DetailsButton extends React.Component {

    render() {
        return (
            <a className="btn btn-dark btn-sm border border-warning" onClick={() => this.props.handleDetailsClick()}><span className="glyphicon glyphicon-plus"></span>Pokaż szczegóły</a>
        )
    }
}
export default DetailsButton;