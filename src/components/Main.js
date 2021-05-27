import React from "react"
import Logout from "./Logout";

export default function Entry (props) {
  return (
    <div>
        <h3>This is the main page</h3>
        <Logout
          baseURL={props.baseURL}
          user={props.user}
          setUser={props.setUser}
          loggedin={props.oggedin}
          setLoggedIn={props.setLoggedIn}
          />
          <h3>User: {props.user.username}</h3>
      </div>
  )
}
