import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';

import {
  bookListReducer,
  taskListReducer,
  bookReducer,
  userReducer,
  taskReducer,
} from '../reducers';

const reducers = combineReducers({
  user: userReducer,
  book: bookReducer,
  bookList: bookListReducer,
  taskList: taskListReducer,
  task: taskReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
