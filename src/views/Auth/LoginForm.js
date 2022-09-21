import React, { Component } from 'react'
import AuthService from './AuthService';


class LoginForm extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      isError: false
  
  }
}

render(){
  return(
    <>
    <button className='tq' onClick={() => AuthService.executeJwtAuthenticationService("tlqkf","tlqkf")} >zzzzzzzzzzzzzzzzz</button>
    </>
  )
}
}
export default LoginForm;