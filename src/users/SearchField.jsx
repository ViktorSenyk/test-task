import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as usersActions from './users.actions';

class SearchField extends Component {
    state = {
        userName: ''
    }

    onChange = event => {
        this.setState({ userName: event.target.value })
    }

    handleUserSearch = () => {
        // this.props.showSpinner();
        this.props.fetchUserData(this.state.userName);
        // getUserData(this.state.userName)
        //     .then(userData => {
        //         this.props.userDataRecieved(userData);
        //     })
    }

    render() {
        return (
            <div className="name-form">
                <input
                    type="text"
                    className="name-form__input"
                    value={this.state.userName}
                    onChange={this.onChange}
                />
                <button
                    className="name-form__btn btn"
                    onClick={this.handleUserSearch}
                >
                    Show
                </button>
            </div>
        )
    }
}

const mapDispatch = {
    // showSpinner: usersActions.showSpinner,
    // userDataRecieved: usersActions.userDataRecieved,
    fetchUserData: usersActions.fetchUserData,
}

SearchField.propTypes = {
    // showSpinner: PropTypes.func.isRequired,
    // userDataRecieved: PropTypes.func.isRequired,
    fetchUserData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatch)(SearchField);
