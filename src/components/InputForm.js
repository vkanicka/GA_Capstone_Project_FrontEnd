import React, {useState, useEffect} from "react"
import {Button} from "semantic-ui-react";

export default function InputForm() {
  const emotions = ['Happy','Sad','Angry','Stressed','Overwhelmed','Annoyed']
  const thoughts = [
    	"I have no idea how to start",
    	"I will never finish this",
    	"Nothing matters",
    	"I want to give up",
    	"I wish I didn't feel this way",
    	"I should be more productive",
    	"My thoughts are racing",
    	"I am too (negative adjective)"
  ]
  const behaviors = [
    'Procrastinating',
   	'Overthinking',
  	'Avoiding',
  	'Withdrawing',
  	'Isolating'
  ]


  const [statusHappy, setHappy] = useState(false)
  const [statusSad, setSad] = useState(false)
  const [statusAngry, setAngry] = useState(false)
  const [statusOverwhelmed, setOverwhelmed] = useState(false)
  const [statusStressed, setStressed] = useState(false)
  const [statusAnnoyed, setAnnoyed] = useState(false)






{/*
  const fillItems = (item, i) => {
    console.log(item)
    let thisStatus = `status${item}`
    let thisFunction = `set${item}`
    return (
      <div
        key={`column-${i}-${item}`} className="computer column">
      <div
        key={`button-${i}-${item}`} className=
        {variableStatus?"ui toggle button active":"ui toggle button"}
        onClick={()=>{setButtonActive(thisStatus, ()=> {thisFunction})}}
        >
      <label
        key={`label-${i}-${item}`}>{item}
      </label>

      </div>
      </div>
    )
  }


  const buildGroup = (group) => {
    return group.map((item, i) => {
      return(
        fillItems(item,i)
      )
      }
    )
  }

  */}

  const submitForm = (e) => {
    e.preventDefault()
    console.log('Input Submitted')
    console.log(
      statusHappy, statusSad, statusAngry, statusStressed, statusOverwhelmed, statusAnnoyed)
  }




  return (
    <form className="ui form" onSubmit={submitForm}>
    <h4>I am feeling...</h4>

    <div className="ui six column grid center aligned doubling">
        <div
          className="computer column">
        <div
          className=
          {statusHappy?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setHappy(!statusHappy)}}
          >
        <label

          >
          Happy
        </label>
        </div>
        </div>

        <div
          className="computer column">
        <div
          className=
          {statusSad?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setSad(!statusSad)}}
          >
        <label

          >
          Sad
        </label>
        </div>
        </div>



        <div
           className="computer column">
        <div
           className=
          {statusAngry?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setAngry(!statusAngry)}}
          >
        <label

          >
          Angry
        </label>
        </div>
        </div>
    </div>

    <div className="ui six column grid center aligned doubling">
        <div
           className="computer column">
        <div
           className=
          {statusStressed?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setStressed(!statusStressed)}}
          >
        <label

          >
          Stressed
        </label>
        </div>
        </div>



        <div
           className="computer column">
        <div
           className=
          {statusOverwhelmed?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setOverwhelmed(!statusOverwhelmed)}}
          >
        <label

          >
          Overwhelmed
        </label>
        </div>
        </div>



        <div
           className="computer column">
        <div
           className=
          {statusAnnoyed?"ui toggle button active":"ui toggle button"}
          onClick={()=>{setAnnoyed(!statusAnnoyed)}}
          >
        <label

          >
          Annoyed
        </label>
        </div>
        </div>
    </div>

    <br/>
    <br/>
    <br/>

    <div className='ui text container'>
     <Button type='submit'>Submit</Button>
    </div>

</form>
  )
}
