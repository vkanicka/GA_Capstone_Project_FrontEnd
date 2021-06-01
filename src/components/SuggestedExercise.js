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
    <div id='exerciseContainer'>
      <div class="ui segment">
        <h2 id="exerciseHeader" class="ui center aligned header">{exercise["name"]}</h2>
        <div class="ui clearing divider"></div>
        <p id="exerciseDescription">{exercise["description"]}</p>
      </div>
    </div>



  )
}
