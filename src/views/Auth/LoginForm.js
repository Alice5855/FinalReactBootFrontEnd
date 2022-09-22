import React, { Component } from 'react'
import AuthService from './AuthService';


class LoginForm extends Component {
 
  constructor(props){
    super(props);
    this.state = {
      userid: '',
      password: '',
      isLoggedIn: false,
      isError: false
  }

    AuthService.setupAxiosInterceptors();
  }

  loginProcess(userId, userPw){
    console.log("activate executeJwtAuthenticationService")
    AuthService.executeJwtAuthenticationService(userId,userPw)
      .then(res => {
        if(res){
          console.log("첫 번째 then 실행")
          console.log(res);
          console.log(res.data.accessToken);

          console.log("activate registerSuccessfulLoginForJwt")
          AuthService.registerSuccessfulLoginForJwt(userId, res.data.accessToken)

          AuthService.loginSuccessGetUserInfo(localStorage.getItem('token')).then(res=>{
            console.log(res);
            AuthService.getLoggedInUserInfo(res);
          });


        }else{
          console.log("로그인 실패");
        }



        res.json();
      });
    console.log("111asfewfwqe");
  }


render(){
  return(
    <>
    <button className='tq' onClick={() => 
      this.loginProcess("memid", "mempw")} >zzzzzzzzzzzzzzzzz</button>
    </>
  )
}
}
export default LoginForm;