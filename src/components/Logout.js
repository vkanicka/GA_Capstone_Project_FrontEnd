import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default function Logout(props) {
  const logout = () => {
    props.setUser({})
    props.setLoggedIn(false)
    fetch(props.BASEURL + "/users/logout", {
      method: "GET",
      credentials: "include"
    })
  }
  return(
    <Button
      size='mini'
      icon onClick={logout}>
      <Icon name='sign-out'/>
    </Button>
  )
}
