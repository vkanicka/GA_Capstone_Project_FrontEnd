import React from "react"
import LoginModal from "./LoginModal";

export default function Entry (props) {
  return (
    <div>
      <h3>This is the entry page</h3>
      <LoginModal
        baseURL={props.baseURL}
        user={props.user}
        setUser={props.setUser}
        loggedin={props.loggedin}
        setLoggedIn={props.setLoggedIn}
      />
    </div>
  )
}
