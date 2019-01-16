import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCH0WKW1YYDX2rPAuic6RYSjQhSCtFb4YM",
  authDomain: "przepisnik-123.firebaseapp.com",
  databaseURL: "https://przepisnik-123.firebaseio.com",
  projectId: "przepisnik-123",
  storageBucket: "przepisnik-123.appspot.com",
  messagingSenderId: "239387872054"
  });


  const fbase = Rebase.createClass(firebaseApp.database());
  export {fbase, firebaseApp};

