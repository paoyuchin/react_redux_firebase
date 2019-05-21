import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyAtrLOman4GVOjz5kFZGlkr1wMw8YuGRHY",
  authDomain: "my-super-firebase.firebaseapp.com",
  databaseURL: "https://my-super-firebase.firebaseio.com",
  projectId: "my-super-firebase",
  storageBucket: "my-super-firebase.appspot.com",
  messagingSenderId: "1061675030294",
  appId: "1:1061675030294:web:230c83bcf8885670"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.firestore();

export { storage, firebase as default}