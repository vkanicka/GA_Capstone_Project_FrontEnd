import React from "react"
import LoginModal from "./LoginModal";

export default function Entry (props) {
  return (
    <div >
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
