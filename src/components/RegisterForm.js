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
  const url = props.baseURL + "/users/register";
  const registerBody = {username: username, email: email, password: password
  };
  try {
    const response = await fetch(url, {
      method: "POST",
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
//------------------------------------------
// import React, { Component } from "react";
// import { Form } from "semantic-ui-react";
//
// export default class Register extends Component {
//   state = {
//     username: "",
//     email: "",
//     password: "",
//     taken: "ui warning hidden message"};
//   handleChange = (e, { name, value }) => {
//     this.setState({ [name]: value });
//   };
//   register = async e => {
//     e.preventDefault();
//     console.log("register function");
//     console.log(this.state);
//
//     const url = this.props.baseURL + "/users/register";
//     const registerBody = {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password
//     };
//     try {
//       console.log(`try user registration`)
//       console.log(registerBody)
//       console.log(url)
//       const response = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(registerBody),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });
//       if (response.status === 201) {
//         console.log('response succeeded');
//         this.props.closeModal()
//       }
//       else if (response.status === 401) {
//         console.log('Email already registered.')
//         this.setState({taken: "ui warning visible message"})
//       } else {
//         console.log(response.status)
//       }
//     } catch (err) {
//       console.log("Error => ", err);
//     }
//
//   };
//
//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.register}>
//           <Form.Input
//             placeholder="Name"
//             name="username"
//             value={this.state.username}
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             placeholder="Email"
//             name="email"
//             type="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//           <Form.Input
//             placeholder="Password"
//             name="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//           />
//           <Form.Button content="Register" />
//         </Form>
//         <div className={this.state.taken}>
//             <i className="close icon"></i>
//             <div className="header">
//               Email or username already taken!
//             </div>
//             Has someone stolen your identity?
//         </div>
//       </div>
//     );
//   }
// }
