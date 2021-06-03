import React, {useState, useEffect} from "react"
import {Button} from "semantic-ui-react";


export default function InputForm(props) {

const [emotions, setEmotions] = useState([])
const [thoughts, setThoughts] = useState([])
const [behaviors, setBehaviors] = useState([])

  const getETBs = async (type)=>{
    const url = `${props.BASEURL}/${type.replace('s','')}/`
    const requestOptions = {
      method: 'GET'
      , credentials: 'include'
    }
    await fetch(url, requestOptions)
      .then(res => {
        return res.json();
      })
      .then(data => {
        switch (type) {
          case 'emotions': setEmotions(data.data); break;
          case 'thoughts': setThoughts(data.data); break;
          case 'behaviors': setBehaviors(data.data); break;
          // eslint-disable-next-line
          default: 'type not found in getETBs function';
        }
      });
  }

  const updateETB = async (type, etbObj) => {
    const url = `${props.BASEURL}/${type.replace('s','')}/${etbObj["id"]}`
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: !etbObj["status"]
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    getETBs(type)
  }

  const submitInput = async e => {
    e.preventDefault()
    const url = `${props.BASEURL}/suggestedexercises/`
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    props.setSuggested(true)
  }

  useEffect(()=>getETBs('emotions'), [])
  useEffect(()=>getETBs('thoughts'), [])
  useEffect(()=>getETBs('behaviors'), [])

  const activeButtonStyle = "ui button circular big"
  const buttonStyle = "ui element button circular big"
  const customButtons = "customButtons"
  const customButtonsActive = "customButtonsActive"

  return (
    <div>
    <div id="ui-container" className="ui container">
    <div>
    <h2 id='inputGreeting'>Hi {props.user["username"]},</h2>
    <h2 id='inputGreeting'>How are you doing today?</h2>
    </div>
    <form className="ui form" onSubmit={submitInput}>

    <div className="ui section divider"></div>

    <h4 id='inputFormSubheaders'>I am feeling...</h4>
    <div className="ui six column grid left aligned doubling">
      {emotions.map((emotion, e)=>{
        return (
          <div key={`emotion-${emotion["id"]}-column`} className="computer column">
            <div
                key={`emotion-${emotion["id"]}-button`}
                className={
                      emotion["status"]?
                          activeButtonStyle
                          :buttonStyle
                        }
                id={emotion["status"]?customButtonsActive
                :customButtons}
                onClick={()=>updateETB("emotions",emotion)}>
              <label key={`emotion-${emotion["id"]}-label`}>{emotion["emotion"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <div className="ui section divider"></div>

    <h4 id='inputFormSubheaders'>I am thinking...</h4>
    <div className="ui six column grid left aligned doubling">
      {thoughts.map((thought, e)=>{
        return (
          <div key={`thought-${thought["id"]}-column`} className="computer column">
            <div key={`thought-${thought["id"]}-button`}
            id={thought["status"]?customButtonsActive
            :customButtons} className={thought["status"]?activeButtonStyle
            :buttonStyle}
             onClick={()=>updateETB("thoughts",thought)}>
              <label key={`thought-${thought["id"]}-label`}>{thought["thought"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <div className="ui section divider"></div>

    <h4 id='inputFormSubheaders'>My actions include...</h4>
    <div className="ui six column grid left aligned doubling">
      {behaviors.map((behavior, e)=>{
        return (
          <div key={`behavior-${behavior["id"]}-column`} className="computer column">
            <div key={`behavior-${behavior["id"]}-button`} className={behavior["status"]?activeButtonStyle
            :buttonStyle}
            id={behavior["status"]?customButtonsActive
            :customButtons} onClick={()=>updateETB("behaviors",behavior)}>
              <label key={`behavior-${behavior["id"]}-label`}>{behavior["behavior"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <br/>
    <br/>

    <div className="ui section divider"></div>
    <div className='ui text container'>
     <Button className='big' type='submit'><i className='paper plane outline icon'></i>Submit</Button>
    </div>


</form>

<br/>
<br/>

</div>
</div>
  )
}
