import React, {useState, useEffect} from "react";

export default function SuggestedExercise(props) {
  const [exercise,setExercise]=useState({})

  const getSuggestedExercise = () => {
    console.log('getting suggestedexercise')

    fetch(props.baseURL+'/suggestedexercises/1')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setExercise(data.data)
      })
  }

  const resetETBs = () => {
    console.log('resetting ETBs')

    fetch(props.baseURL+'/reset/', {method:"PUT"})
      
  }



  useEffect(getSuggestedExercise, [])
  useEffect(resetETBs,[])



  return (
    <div>
      <h2>{exercise["name"]}</h2>
      <p>{exercise["description"]}</p>


    </div>
  )
}
