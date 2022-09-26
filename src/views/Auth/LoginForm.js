import React, { Component } from 'react'
import AuthService from './AuthService';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      password: '',
      isLoggedIn: false,
      isError: false
    }

    AuthService.setupAxiosInterceptors();
  }

  loginProcess(userId, userPw) {
    console.log("activate executeJwtAuthenticationService")
    AuthService.executeJwtAuthenticationService(userId, userPw)
      .then(res => {
        if (res.data.accessToken) {

          console.log("첫 번째 then 실행")
          console.log(res);
          console.log(res.data.accessToken);

          console.log("activate registerSuccessfulLoginForJwt")
          AuthService.registerSuccessfulLoginForJwt(userId, res.data.accessToken)
          

            AuthService.loginSuccessGetUserInfo(localStorage.getItem('token')).then(res => {
              console.log(res);
              AuthService.getLoggedInUserInfo(res);
            });
            alert("로그인성공함");
            window.location.href="/";
        }    
      }).catch(error => {
        alert("로그인 실패");
        window.location.reload();
      });
  }


  render() {
    const id = this.state.userid;
    const pw = this.state.password;
    return (
      <>
          <div id="spaceFiller"></div>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-xl-10">
                <div class="card rounded-3 text-black">
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="card-body p-md-5 mx-md-4">

                        <div class="text-center m-auto" style={{width:'70%'}}>
                        <img src="http://localhost:3000/images/testlogo3.png" alt="logo" className='img-fluid' />
                            <h4 class="mt-1 mb-5 pb-1"></h4>
                        </div>

                          <p>Please login to your account</p>

                          <div class="form-outline mb-2">
                            <input type="email" id={id} name={id} class="form-control"
                              placeholder="Email address" value={id} onChange={
                                (event) => {
                                  this.setState({ userid: event.target.value })
                                }
                              } />
                            <label class="form-label" for="form2Example11">Username</label>
                          </div>

                          <div class="form-outline mb-4">
                            <input type="password" id={pw} name={pw} class="form-control" onChange={
                              (event) => {
                                this.setState({ password: event.target.value })
                              }
                            } />
                            <label class="form-label" for="form2Example22">Password</label>
                          </div>

                          <div class="text-center pt-1 mb-5 pb-1">
                            <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" onClick={() =>
                              this.loginProcess(id, pw)}>Log
                              in</button>
                          </div>

                          <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <a href= 'http://192.168.0.26:9005/member/join'>Create new</a>
                          </div>
                      </div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div class="text-white px-3 py-4 p-md-3 mx-md-2">
                        
                        <img src="http://localhost:3000/images/loginimg.webp" className='img-fluid'></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </>
      )
  }
}



    
    
export default LoginForm;