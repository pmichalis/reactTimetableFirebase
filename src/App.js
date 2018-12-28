import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey : "AIzaSyDu3DMv1QwcmzIaPkhPL6I7AjmxCIvsFlk",
  authDomain : "react-calendar-94e12.firebaseapp.com"
})

class App extends Component {

state = {
  isSiteIn : false
}
uiConfig ={
  signInFlow : "popup",
  signInOptions : [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callback : {
    signInSuccess: () => false
  }
}
componentDidMount = () =>{
 
  firebase.auth().onAuthStateChanged(user =>{
    this.setState({
      isSignedIn : !!user
    })

  })
}
  render() {
    return (
      <div className="App">
      {this.state.isSignedIn ? 
        (
        <div>Im IN!</div>
        )
      :
        (
          <StyledFirebaseAuth
          uiConfig = {
            this.uiConfig
          }
          firebaseAuth = {
            firebase.auth()
          }/>
        )}
      </div>
    );
  }
}

export default App;
