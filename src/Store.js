// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { clientList } from '../src/slice/clientListSlice';

const rootReducer = combineReducers({
  clientList: clientList.reducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;