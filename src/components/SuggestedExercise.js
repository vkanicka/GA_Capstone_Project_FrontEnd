import React, {useState, useEffect} from "react";
// import UserExercises from "./UserExercises";

export default function SuggestedExercise(props) {
  console.log(props.user)
  const [exercise, setExercise] = useState({})
  const [userExercise, setUserExercise] = useState({})
  const [userExerciseID, setUserExerciseID] = useState(0)
  const [exists, setExists]=useState(false)

  const resetETBs = () => {
    fetch(props.BASEURL+'/reset/', {method:"PUT", credentials:"include"})
    console.log('ETBs reset.')
  }

  const resetEs = () => {
    fetch(props.BASEURL+'/emotion/reset', {method:"PUT", credentials:"include"})
    console.log('Es reset.')
  }

  const getSuggestedExercise = () => {
    fetch(props.BASEURL+'/suggestedexercises/1', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setExercise(data.data.exercise)
      })
      .then(()=>resetETBs())
      .then(()=>resetEs())
  }


  // const addUserExercise = () => {
  //   console.log('triggered add user exercise')
  //   console.log(exercise)
  //   console.log(props.user)
  //   console.log(`exercise id: ${exercise.id}`)
  //   console.log(props.BASEURL+'/userexercises/')
  //   fetch(
  //     props.BASEURL+'/userexercises/',
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         exercise: exercise["id"]
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //       , credentials: "include"
  //     })
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       setUserExercise(data.data)
  //       setExists(true)
  //       if (data.status === 201) {
  //         console.log('user exercise created')
  //         setUserExerciseID(data.data.id)
  //       }
  //       else if (data.status === 401) {
  //         console.log('need existing user exercise id here')
  //       }
  //     })
  // }


  const addUserExercise = () => {
  console.log('triggered add user exercise')
  fetch(
    props.baseURL+'/userexercises/',
    {
      method: "POST",
      body: JSON.stringify({
        "exercise" : exercise["id"],
        "completed" : 0,
        "completed_count" : 0,
        "favorite" : 0,
        "recommended" : 0
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      setUserExercise(data.data)
      setExists(true)
      if (data.status === 201) {
        console.log('user exercise created')
        setUserExerciseID(data.data.id)
      }
      else if (data.status === 401) {
        console.log('need existing user exercise id here')
      }
    })
}



const favoriteUserExercise = async e => {
  console.log('favoriting exercise')
  // check if added to user exercises
  // if not, run addUserExercise funciton first
  e.preventDefault()
  console.log(`user exercise id: ${userExerciseID}`)
  const url = `${props.BASEURL}/userexercises/${userExerciseID}`
try {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      "favorite" : !userExercise["favorite"]
    }),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include"
  });
  if (response.status === 200) {
    setUserExercise(prevState=> ({...prevState, favorite: !prevState.favorite}))
  }
  else {console.log(response.status)}
} catch (err) {
  console.log("Error => ", err);
}
}

  const completeUserExercise = async e => {
    console.log('code complete user exercise function')
    // check if added to user exercises
    // if not, run addUserExercise funciton first
    e.preventDefault()
    console.log(`user exercise id: ${userExerciseID}`)
    const url = `${props.BASEURL}/userexercises/${userExerciseID}`
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        "completed" : !userExercise["completed"]
      }),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    if (response.status === 200) {
      setUserExercise(prevState=> ({...prevState, completed: !prevState.completed}))
    }
    else {console.log(response.status)}
  } catch (err) {
    console.log("Error => ", err);
  }
}




  useEffect(getSuggestedExercise, [])
  useEffect(resetETBs,[getSuggestedExercise])
  useEffect(resetEs,[getSuggestedExercise])
  // useEffect(addUserExercise,[])
  console.log('userexerciseID:'+userExerciseID)

  return (
    <div id='exerciseContainer'>
      <div className="ui fluid raised card">
        <div className="content">
          <div className="header">{exercise["id"]}: {exercise["name"]}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Exercise</h4>
          <div className="ui large feed">
              <div className="content">
                <div className="description left aligned">
                  <p>{exercise["description"]} Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="extra content">
            <button onClick={addUserExercise} className={exists?"ui button disabled":"ui button"}><i className='plus icon'/>Add to My Exercises</button>
            <button onClick={favoriteUserExercise} className='ui button like'><i className={userExercise["favorite"]?'like icon red':'like icon'}/>Favorite</button>
            <button onClick={completeUserExercise} className="ui button"><i className={userExercise["completed"]?'check icon green':'check icon'}/>Completed Today</button>
        </div>
      </div>
      {/*}<UserExercises
        BASEURL={props.BASEURL}
        user={props.user}
        setUser={props.setUser}
        loggedin={props.loggedin}
        setLoggedIn={props.setLoggedIn}
      />*/}
    </div>
  )
}
