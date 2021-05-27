// --------------------------------------------
// IMPORTS
//---------------------------------------------
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React, { Component } from "react";
// import FrontPage from "./components/FrontPage";
import LoginModal from "./components/LoginModal";
import Logout from "./components/Logout";
const p = (x)=>{console.log(x)}

// --------------------------------------------
// BASE URL
//---------------------------------------------
const baseURL = "http://localhost:8000/api/v1"
const exercisesURL = `${baseURL}/exercises/`

// --------------------------------------------
// APP CONSTRUCTOR AND STATE
//---------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      user: {},
      loggedin:false
    };
  }

// --------------------------------------------
// APP FUNCTIONS
//---------------------------------------------


  getExercises = () => {
    p('getExercises')
    const url = exercisesURL
    const requestOptions = {
      method: 'GET'
      // , credentials: 'include'
    }
    fetch(url, requestOptions)
    .then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        exercises: data.data
      })
    })
  }


// --------------------------------------------
// COMPONENT DID MOUNT
//---------------------------------------------
componentDidMount() {
    this.getExercises()
  }

// --------------------------------------------
// APP RENDER
//---------------------------------------------
render() {
    return (
      <div className="App">
        <h1>Capstone</h1>
        <LoginModal baseURL={baseURL}/>
        <Logout baseURL={baseURL}/>
      </div>
// --------------------------------------------
// THE END
//---------------------------------------------
  )
}
}
