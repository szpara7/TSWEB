import React from 'react';

class DeleteButton extends React.Component {

    render() {
        return (
            <a className="btn btn-dark btn-sm border border-danger" onClick={() => this.props.onClick()}><span className="glyphicon glyphicon-plus"></span>Usuń</a>
        )
    }
}
export default DeleteButton;