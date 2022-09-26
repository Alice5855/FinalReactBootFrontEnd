import axios from 'axios'

const LoginURL = "/auth/login"
const LoginSuccessURL = "/auth/loginsuccess"

class AuthenticationService {
    // send username, password to the SERVER
    executeJwtAuthenticationService(mememail, mempw) {
        return axios.post(LoginURL , {
            mememail,
            mempw
        })
    }

    executeHelloService() {
        console.log("===executeHelloService===")
        return axios.get('http://localhost:8090/hello');        
    }

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', username);
        // sessionStorage.setItem('authenticatedUser', username)
        //this.setupAxiosInterceptors(this.createJWTToken(token))
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                console.log(config);

                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("authenticatedUser");
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    getLoggedInUserName() {
        //let user = sessionStorage.getItem('authenticatedUser')
        let user = localStorage.getItem('authenticatedUser');
        if(user===null) return '';
        return user;
    }

    loginSuccessGetUserInfo(accessToken){
        return axios.post(LoginSuccessURL, {accessToken});
    }

    getLoggedInUserInfo(user){
        localStorage.setItem("nickname", user.data.memnickname);
        localStorage.setItem("role", user.data.memrole);
    }

    roleAdminCheck(){
        if(localStorage.getItem("role") === "ROLE_ADMIN"){
            console.log("지금 로그인한 계정 어드민임");
            return true;
        }else{
            console.log("이사람 어드민아님");
            return false;
        }
    }

    roleAnyCheck(){
        if (localStorage.getItem("role") === "ROLE_MEMBER" || localStorage.getItem("role") === "ROLE_ADMIN") {
            console.log("지금 로인한거 어쨋든 로그인중임");
            return true;
        }else{
            console.log("암튼 로그인 아님");
            return false;
        }
    }

}

export default new AuthenticationService()