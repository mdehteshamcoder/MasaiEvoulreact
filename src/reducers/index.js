s (5 sloc)  148 Bytes

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  movies: searchReducer
});