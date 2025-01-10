import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <div className="page">
        <UserInfo />
        <SearchField />
      </div>
    </Provider>
  );
}
