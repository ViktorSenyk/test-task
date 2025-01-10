import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';

class SearchField extends Component {
  state = {
    inputValue: '',
  };

  handleUserSearch = () => this.props.fetchUserData(this.state.inputValue);

  render = () => (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={this.state.inputValue}
        onChange={e => this.setState({ inputValue: e.target.value })}
      />
      <button className="name-form__btn btn" onClick={this.handleUserSearch}>
        Show
      </button>
    </div>
  );
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
