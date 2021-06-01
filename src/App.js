// --------------------------------------------
// IMPORTS
//---------------------------------------------
import "semantic-ui-css/semantic.min.css";
import './App.css';
import React, { useState } from "react";
import Entry from "./components/Entry";
import Main from "./components/Main";

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

  // const updateEmotions = (id) => {
  //   const url = `${baseURL}/emotions/${id}`
  //   const requestOptions = {
  //     method: 'POST'
  //     // , credentials: 'include'
  //   }
  //   fetch(url, requestOptions)
  //   .then(response => {
  //     return response.json();
  //   }).then(data => {
  //     console.log(data.data)
  //   })
  // }

// --------------------------------------------
// APP RENDER
//---------------------------------------------
  return (
    <div className="App">
      <h1>Capstone</h1>
      {/*
      <Main
            baseURL={baseURL}
            user={user}
            setUser={setUser}
            loggedin={loggedin}
            setLoggedIn={setLoggedIn}
        />
      {/**/}

        {/**/}
        {loggedin
          ? <Main
              baseURL={baseURL}
              user={user}
              setUser={setUser}
              loggedin={loggedin}
              setLoggedIn={setLoggedIn}
            />
          : <div>
              <Entry
                baseURL={baseURL}
                user={user}
                setUser={setUser}
                loggedin={loggedin}
                setLoggedIn={setLoggedIn}
              />
            </div>}
        {/**/}





    </div>
// --------------------------------------------
// THE END
//---------------------------------------------
)
}
