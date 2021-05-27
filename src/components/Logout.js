import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'


export default class Logout extends Component {
  state = {

  }
  logout = () => {
    console.log(`logging out now`)
    fetch(this.props.baseURL + "/users/logout")
}
render () {
  return(
    <Button
      size='mini'
      icon onClick={()=>{this.logout()}}>
      <Icon name='sign-out'/>

    </Button>
  )
}
}
