import React from 'react';


class UpdateButton extends React.Component {

    render() {
        return (
            <a className="btn btn-dark btn-sm border border-primary" onClick={() => this.props.onClick()}>Edytuj</a>
        )
    }
}

export default UpdateButton;