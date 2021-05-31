import React, {useState} from "react"
import Logout from "./Logout";
import InputForm from "./InputForm"
import SuggestedExercise from "./SuggestedExercise"

export default function Entry (props) {
  const [exerciseSuggested, setSuggested] = useState(false)

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
          {/* // <a class="ui image label">
          //   <img src="/images/avatar/small/stevie.jpg"/>
          //   Stevie
          // </a> */}

          {exerciseSuggested === false?
            <InputForm
            baseURL={props.baseURL}
            user={props.user}
            setUser={props.setUser}
            loggedin={props.oggedin}
            setLoggedIn={props.setLoggedIn}
            setSuggested={setSuggested}
            />
            :
            <SuggestedExercise
            baseURL={props.baseURL}
            user={props.user}
            setUser={props.setUser}
            loggedin={props.oggedin}
            setLoggedIn={props.setLoggedIn}
            />
          }




    </div>
  )
}
