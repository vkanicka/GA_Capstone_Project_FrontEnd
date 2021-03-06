import React from "react"
import LoginModal from "./LoginModal";


export default function Entry (props) {
  return (
    <div >
      <LoginModal
        BASEURL={props.BASEURL}
        user={props.user}
        setUser={props.setUser}
        loggedin={props.loggedin}
        setLoggedIn={props.setLoggedIn}
      />
      <div id='entryTitleContainer'>
        <h1 id="entryTitle">my Mental Health Trainer</h1>
      </div>
    </div>
  )
}
