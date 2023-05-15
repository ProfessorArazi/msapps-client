import { configureStore, combineReducers } from '@reduxjs/toolkit';
import imageReducer from '../slices/images';
import modalReducer from '../slices/modal';

const rootReducer = combineReducers({
  images: imageReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;