import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;