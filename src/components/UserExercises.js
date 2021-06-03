import React, {useState, useEffect} from "react";

export default function UserExercises(props) {
  const [userExercises, setUserExercises] = useState([])

  const getUserExercises = () => {
    fetch(props.baseURL+'/userexercises', {method:"GET"})
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUserExercises(data.data)
      })
      .then(
        console.log('userExercises set')
      )
  }

  useEffect(getUserExercises,[])

  return(
    <div>
      <h1>User Exercises</h1>
      {userExercises.map((userExercise, ue)=>{
        <h3 key={ue}>userExercise["exercise"]["name"]</h3>
      })}

    </div>

  )
}
