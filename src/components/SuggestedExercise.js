import React, {useState, useEffect} from "react";
import {Button} from "semantic-ui-react";

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
{/*
      <div className="ui segment">
        <h2 id="exerciseHeader" className="ui center aligned header">{exercise["name"]}</h2>


        <div className="ui clearing divider"></div>


        <p id="exerciseDescription">{exercise["description"]}</p>


        <div className="ui section divider"></div>

        <div className='ui text container'>
         <Button type='submit'><i className='check circle outline icon big'></i>Complete</Button>
        </div>
      </div>
*/}
    <div class="ui fluid raised card">
        <div class="content">
          <div class="header">{exercise["name"]}</div>
        </div>
        <div class="content">
          <h4 class="ui sub header">Exercise</h4>
          <div class="ui large feed">
              <div class="content">
                <div class="description left aligned">
                  <p>{exercise["description"]} Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                </div>
              </div>
            </div>
        </div>

        <div class="extra content">
            <button class="ui button like"><i className='like icon big'/>Like</button>
            <button class="ui button"><i className='check icon big'/>Complete</button>
        </div>
      </div>



    </div>



  )
}
