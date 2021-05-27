import React, { Component } from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import RegisterModal from "./RegisterModal";

export default class Login extends Component {
  state = { username: "", email:"", password: "", incorrect: "ui negative hidden message"};

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  loggingUser = async e => {
    console.log("loggingUser");
    console.log(this.state);
    e.preventDefault();
    const url = `${this.props.baseURL}/users/login`;
    // const url = 'http://localhost:8000/api/v1/users/login'
    console.log(`login URL: ${url}`)
    const loginBody = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    try {
      console.log(loginBody)
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(loginBody),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include" // SENDING COOKIES
      });

      if (response.status === 200) {
        console.log(`login form success`)
        this.props.closeModal()
        // this.props.getExercises();
      } else if (response.status === 401) {
        console.log('email or username is incorrect')
        this.setState ({
          incorrect: "ui icon negative visible message"
        })
      } else {
        console.log(response.status)
      }
    } catch (err) {
      console.log("Error => ", err);
    }

  };

  render() {
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={this.loggingUser}>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Username"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />

              <Form.Input
                icon="envelope"
                iconPosition="left"
                name="email"
                label="Email"
                onChange={this.handleChange}
              />

              <Form.Input
                icon="lock"
                iconPosition="left"
                name="password"
                label="Password"
                type="password"
                onChange={this.handleChange}
              />
              <div className={this.state.incorrect}>
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
              baseURL={this.props.baseURL}
              closeModal={this.props.closeModal}
            />
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    );
  }
}
