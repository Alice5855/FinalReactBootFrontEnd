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



      });
    console.log("111asfewfwqe");
  }


  render(){
    const id = this.state.userid;
    const pw = this.state.password;
      return(
        <>
        <div id="spaceFiller"></div>
          <div> 
            <div className="form">
       
          <div className="input-container">
            <label>Username </label>
            <input type="text" name={id} value={id} onChange= {
              (event) => {
                this.setState({userid: event.target.value})
               }
              }  
              required />
    
          </div>
    
          <div className="input-container">
            <label>Password </label>
            <input type="password" name={pw} value={pw}  onChange= {
              (event) => {
                this.setState({password: event.target.value})
               }
              }
              required />
          <a href='http://192.168.0.26:9005/member/join'>회원가입</a>
          </div>
          <div className="button-container">
          <button onClick={() => 
          this.loginProcess(id, pw)} >submit</button>
          </div>
       
      </div>
      </div>
        
        </>
      )
    }
    }
export default LoginForm;