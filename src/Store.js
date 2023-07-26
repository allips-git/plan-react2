// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { clientList } from '../src/slice/clientListSlice';
import { clientInfo } from '../src/slice/clientInfoSlice';

const rootReducer = combineReducers({
  clientList : clientList.reducer,
  clientInfo : clientInfo.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;