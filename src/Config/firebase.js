import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKHtCLyOhWzQBXsbYrHqvBusj5qQJtZGI",
  authDomain: "aplicativoeai-33c73.firebaseapp.com",
  databaseURL: "https://aplicativoeai-33c73-default-rtdb.firebaseio.com",
  projectId: "aplicativoeai-33c73",
  storageBucket: "aplicativoeai-33c73.appspot.com",
  messagingSenderId: "1087305083753",
  appId: "1:1087305083753:web:c407032ef5a8c7eaa3abf8",
  measurementId: "G-2EEG3CX3DZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
