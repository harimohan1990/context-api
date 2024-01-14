
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../components/features/UserList/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
 
});

export default rootReducer;
