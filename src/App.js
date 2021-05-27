// --------------------------------------------
// IMPORTS
//---------------------------------------------
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React, { useState } from "react";
// import FrontPage from "./components/FrontPage";
import LoginModal from "./components/LoginModal";
import Logout from "./components/Logout";

// --------------------------------------------
// BASE URL
//---------------------------------------------
const baseURL = "http://localhost:8000/api/v1"

// --------------------------------------------
// APP CONSTRUCTOR AND STATE
//---------------------------------------------
export default function App() {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedIn] = useState(false)
    // const [exercises, setExercises] = useState([])

  // --------------------------------------------
  // APP FUNCTIONS
  //---------------------------------------------
  // const getExercises = () => {
  //   const url = `${baseURL}/exercises/`
  //   const requestOptions = {
  //     method: 'GET'
  //     // , credentials: 'include'
  //   }
  //   fetch(url, requestOptions)
  //   .then(response => {
  //     return response.json();
  //   }).then(data => {
  //     setExercises(data.data)
  //   })
  // }

// --------------------------------------------
// APP RENDER
//---------------------------------------------
  return (
    <div className="App">
      <h1>Capstone</h1>
      <LoginModal
        baseURL={baseURL}
        user={user}
        setUser={setUser}
        loggedin={loggedin}
        setLoggedIn={setLoggedIn}
      />
      <Logout
        baseURL={baseURL}
        user={user}
        setUser={setUser}
        loggedin={loggedin}
        setLoggedIn={setLoggedIn}
      />
    </div>
// --------------------------------------------
// THE END
//---------------------------------------------
)
}
