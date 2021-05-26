// --------------------------------------------
// IMPORTS
//---------------------------------------------
import './App.css';
import React, { Component } from "react";
const p = (x)=>{console.log(x)}

// --------------------------------------------
// BASE URL
//---------------------------------------------
const baseURL = "http://localhost:8000/api/v1"
const exercisesURL = `${baseURL}/exercises`

// --------------------------------------------
// APP CONSTRUCTOR AND STATE
//---------------------------------------------
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    };
  }

// --------------------------------------------
// APP FUNCTIONS
//---------------------------------------------


  getExercises = () => {
    p('getExercises')
    const url = 'http://localhost:8000/api/v1/exercises/'
    p(exercisesURL)
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
        {this.state.exercises.map((exercise, e) => {
          return (
            <p>{exercise.name}</p>
          )
        })}
      </div>
// --------------------------------------------
// THE END
//---------------------------------------------
  )
}
}
