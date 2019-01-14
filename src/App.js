import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import CulinaryRecipes from './src/CulinaryRecipes'
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
    console.log("user", user)
  })
}
  render() {
    return (
      <div className="App">
      {this.state.isSignedIn ? 
        (
        <span>
          <div>Im IN!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          <h1>Hello my friend! {firebase.auth().currentUser.displayName}</h1>
          <div>
            <CulinaryRecipes/>
          </div>
        </span>
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
