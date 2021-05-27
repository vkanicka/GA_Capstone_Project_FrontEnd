import React, {useState } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import RegisterModal from "./RegisterModal";

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorrect, setIncorrect] = useState('ui negative hidden message')

  const handleChange = (e, { name, value }) => {
    switch (name) {
      case 'username': setUsername(value); break;
      case 'email': setEmail(value);break;
      case 'password':setPassword(value);break;
      default: break;
    }
  }
  const loggingUser = async e => {
    e.preventDefault()
    const url = `${props.baseURL}/users/login`
    const loginBody = {
      username: username, email: email, password: password
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(loginBody),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (response.status === 200) {

        props.closeModal()
      } else if (response.status === 401) {
        setIncorrect("ui icon negative visible message")
      } else {
        console.log(response.status)
      }
    } catch (err) {
      console.log("Error => ", err);
    }
}
return (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column>
        <Form onSubmit={loggingUser}>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Username"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <Form.Input
            icon="envelope"
            iconPosition="left"
            name="email"
            label="Email"
            onChange={handleChange}
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
          />
          <div className={incorrect}>
              <i className="lock icon"></i>
              <div className="content">
                <div className="header">
                  Email or username is incorrect.
                </div>
                I forget things too.
              </div>
          </div>

          <Button content="Login" primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign="middle">
        <RegisterModal
          baseURL={props.baseURL}
          closeModal={props.closeModal}
          user={props.user}
          loggedin={props.loggedin}
        />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)
}
