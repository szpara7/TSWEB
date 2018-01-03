import React from 'react';

class CreateButton extends React.Component {

    render() {
        return (
            <a  className="btn btn-dark btn-block border border-success"  data-toggle="modal" data-target={this.props.modalId}>
            <span className="glyphicon glyphicon-plus"></span>Dodaj</a>
        )
    }
}
export default CreateButton;