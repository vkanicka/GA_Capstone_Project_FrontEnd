import React, {useState, useEffect} from "react"
import {Button} from "semantic-ui-react";

export default function InputForm(props) {

const [emotions, setEmotions] = useState([])

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

  const getEmotions =()=>{
    const url = `${props.baseURL}/emotion/`
    const requestOptions = {
      method: 'GET'
      // , credentials: 'include'
    }
    fetch(url)
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

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        status: !emoObj["status"]
      }),
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include"
    });



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
          <div className="computer column">
            <div className="ui toggle button" onClick={()=>updateEmotion(emotion["id"])}>
              <label>{emotion["emotion"]}</label>
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
{emotions.map((emotionObject, e) => {
          return (
            <p key={e}>{emotionObject["emotion"]}: {emotionObject["status"]}</p>
          )
        })}



</div>
  )
}
