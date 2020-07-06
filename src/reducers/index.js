import { combineReducers } from 'redux';
import UsersReducers from './Users';

export default combineReducers({
  users: UsersReducers,
});
