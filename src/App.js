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
// const BASEURL = "http://localhost:8000"
const BASEURL = "https://mental-health-trainer.herokuapp.com"
console.log(`my BASEURL is ${BASEURL}`)
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
        BASEURL={BASEURL}
        user={user}
        setUser={setUser}
        loggedin={loggedin}
        setLoggedIn={setLoggedIn}
    />

*/}

  {loggedin
    ? <Main
        BASEURL={BASEURL}
        user={user}
        setUser={setUser}
        loggedin={loggedin}
        setLoggedIn={setLoggedIn}
      />
    : <div>
        <Entry
          BASEURL={BASEURL}
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
