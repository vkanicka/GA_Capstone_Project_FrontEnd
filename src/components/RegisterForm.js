import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorrect, setIncorrect] = useState('ui warning hidden message')

const handleChange = (e, { name, value }) => {
  switch (name) {
    case 'username': setUsername(value); break;
    case 'email': setEmail(value);break;
    case 'password':setPassword(value);break;
    default: break;
  }
}
const register = async e => {
  e.preventDefault();
  const url = props.BASEURL + "/users/register";
  console.log(url)
  const registerBody = {username: username, email: email, password: password
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(registerBody),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 201) {
      props.closeModal()
    }
    else if (response.status === 401) {
      setIncorrect("ui warning visible message")
    } else {
      console.log(response.status)
    }
  } catch (err) {
    console.log("Error => ", err);
  }
}
return (
  <div>
    <Form onSubmit={register}>
      <Form.Input
        placeholder="Name"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <Form.Input
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
      />
      <Form.Input
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <Form.Button content="Register" />
    </Form>
    <div className={incorrect}>
        <div className="header">
          Email or username already taken!
        </div>
        Has someone stolen your identity?
    </div>
  </div>
)
}
