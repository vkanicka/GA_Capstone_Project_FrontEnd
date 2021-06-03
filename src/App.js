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
// const baseURL = "http://localhost:8000/api/v1"
const baseURL = "https://mental-health-trainer.herokuapp.com/api/v1"
// --------------------------------------------
// APP CONSTRUCTOR AND STATE
//---------------------------------------------
export default function App() {
  const [user, setUser] = useState({})
  const [loggedin, setLoggedIn] = useState(false)

// --------------------------------------------
// APP FUNCTIONS
//---------------------------------------------


// --------------------------------------------
// APP RENDER
//---------------------------------------------
  return (
    <div className="App">
      {/*
      <Main
            baseURL={baseURL}
            user={user}
            setUser={setUser}
            loggedin={loggedin}
            setLoggedIn={setLoggedIn}
        />
      */}
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
    </div>
// --------------------------------------------
// THE END
//---------------------------------------------
)
}
