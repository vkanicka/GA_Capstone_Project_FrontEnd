import React, { useState, useEffect } from "react";
import { Icon, Button, Modal } from "semantic-ui-react";
import LoginForm from "./LoginForm";

export default function LoginModal(props) {
  const [open, setOpen] = useState(false);

  useEffect(setOpen)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="mini" icon>
          <Icon name="user" />
        </Button>
      }
    >
      <Modal.Header>Login or Register</Modal.Header>

      <Modal.Content>
        <LoginForm
          closeModal={() => setOpen(false)}
          BASEURL={props.BASEURL}
          user={props.user}
          setUser={props.setUser}
          loggedin={props.loggedin}
          setLoggedIn={props.setLoggedIn}
        />
      </Modal.Content>

      <Modal.Actions />
    </Modal>
  );
}
