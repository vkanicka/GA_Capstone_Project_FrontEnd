import React, {useState, useEffect} from "react"
import {Button} from "semantic-ui-react";

export default function InputForm(props) {

const [emotions, setEmotions] = useState([])
const [thoughts, setThoughts] = useState([])
const [behaviors, setBehaviors] = useState([])

  const getETBs = async (type)=>{
    const url = `${props.baseURL}/${type.replace('s','')}/`
    const requestOptions = {
      method: 'GET'
      // , credentials: 'include'
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
    const url = `${props.baseURL}/${type.replace('s','')}/${etbObj["id"]}`
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: !etbObj["status"]
      }),
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include"
    });
    getETBs(type)
  }


  const handleSubmit = () => {
    console.log('submit button was clicked')
  }


  useEffect(() => {console.log('useEffect was triggered!')})
  useEffect(()=>getETBs('emotions'), [])
  useEffect(()=>getETBs('thoughts'), [])
  useEffect(()=>getETBs('behaviors'), [])


  return (
    <div>

    <form className="ui form" onSubmit={handleSubmit}>

    <h4>I am feeling...</h4>
    <div className="ui six column grid center aligned doubling">
      {emotions.map((emotion, e)=>{
        return (
          <div key={`emotion-${emotion["id"]}-column`} className="computer column">
            <div key={`emotion-${emotion["id"]}-button`} className={emotion["status"]?"ui toggle button active":"ui toggle button"} onClick={()=>updateETB("emotions",emotion)}>
              <label key={`emotion-${emotion["id"]}-label`}>{emotion["emotion"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <h4>I am thinking...</h4>
    <div className="ui six column grid center aligned doubling">
      {thoughts.map((thought, e)=>{
        return (
          <div key={`thought-${thought["id"]}-column`} className="computer column">
            <div key={`thought-${thought["id"]}-button`} className={thought["status"]?"ui toggle button active":"ui toggle button"} onClick={()=>updateETB("thoughts",thought)}>
              <label key={`thought-${thought["id"]}-label`}>{thought["thought"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <h4>My actions include...</h4>
    <div className="ui six column grid center aligned doubling">
      {behaviors.map((behavior, e)=>{
        return (
          <div key={`behavior-${behavior["id"]}-column`} className="computer column">
            <div key={`behavior-${behavior["id"]}-button`} className={behavior["status"]?"ui toggle button active":"ui toggle button"} onClick={()=>updateETB("behaviors",behavior)}>
              <label key={`behavior-${behavior["id"]}-label`}>{behavior["behavior"]}</label>
            </div>
          </div>
        )
      })}
    </div>

    <br/>
    <br/>

    <div className='ui text container'>
     <Button type='submit'>Submit</Button>
    </div>

</form>

<br/>
<br/>


</div>
  )
}
