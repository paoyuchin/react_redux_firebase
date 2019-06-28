import authReducer from './authReducer';
import reviewReducer from "./reviewReducer";
import productsReducer from "./productsReducer";
import weatherReducer from "./weatherReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  review: reviewReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  products: productsReducer,
  weather: weatherReducer
});

export default rootReducer;
