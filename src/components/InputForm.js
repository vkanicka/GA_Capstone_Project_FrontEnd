import React, {useState, useEffect} from "react"
import {Button} from "semantic-ui-react";

export default function InputForm(props) {

const [emotions, setEmotions] = useState([])
const [thoughts, setThoughts] = useState([])
const [behaviors, setBehaviors] = useState([])

  const getEmotions =()=>{
    const url = `${props.baseURL}/emotion/`
    const requestOptions = {
      method: 'GET'
      // , credentials: 'include'
    }
    fetch(url, requestOptions)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setEmotions(data.data)
      });
  }

  const updateEmotion = async (id) =>{
    console.log(id+' was clicked')
    const url = `${props.baseURL}/emotion/${id}`
    const emoObj = emotions[id-1]
    console.log(emoObj)
    console.log(url)

    await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: !emoObj["status"]
      }),
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include"
    });
    getEmotions()
  }

  const handleSubmit = () => {
    console.log('submit button was clicked')
  }


  useEffect(() => {console.log('useEffect was triggered!')})
  useEffect(getEmotions, [])



  return (
    <div>

    <form className="ui form" onSubmit={handleSubmit}>
    <h4>I am feeling...</h4>
    <div className="ui six column grid center aligned doubling">
      {emotions.map((emotion, e)=>{
        return (
          <div key={`emotion-${emotion["id"]}-column`} className="computer column">
            <div key={`emotion-${emotion["id"]}-button`} className={emotion["status"]?"ui toggle button active":"ui toggle button"} onClick={()=>updateEmotion(emotion["id"])}>
              <label key={`emotion-${emotion["id"]}-label`}>{emotion["emotion"]}</label>
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
