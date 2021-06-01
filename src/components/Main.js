import React, {useState} from "react"
import Logout from "./Logout";
import InputForm from "./InputForm"
import SuggestedExercise from "./SuggestedExercise"

export default function Entry (props) {
  const [exerciseSuggested, setSuggested] = useState(false)

  return (
    <div>
        <Logout
          baseURL={props.baseURL}
          user={props.user}
          setUser={props.setUser}
          loggedin={props.oggedin}
          setLoggedIn={props.setLoggedIn}
          />

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
