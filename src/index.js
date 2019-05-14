import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootRedcuer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk"; // redux-thunk is a middleware
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootRedcuer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, { useFirestoreForProfile: true, userProfile:'users', attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("root"));
  serviceWorker.unregister();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//createStore(reducer, [preloadedState], [enhancer])
//reducer(Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
//[preloadedState](any): The initial state.You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session.If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it.Otherwise, you are free to pass anything that your reducer can understand.
//[enhancer](Function): The store enhancer.You may optionally specify it to enhance the store with third - party capabilities such as middleware, time travel, persistence, etc.The only store enhancer that ships with Redux is applyMiddleware().
