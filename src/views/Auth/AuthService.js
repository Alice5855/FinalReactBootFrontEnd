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

    registerSuccessfulLoginForJwt(username, token) {
        console.log("===registerSuccessfulLoginForJwt===")
        localStorage.setItem('token', token);
        // sessionStorage.setItem('authenticatedUser', username)
        // this.setupAxiosInterceptors(this.createJWTToken(token))
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
                    // config.headers['Authorization'] = 'Bearer ' + token;
                    config.headers.Authorization = 'Bearer ' + token;
                }
                // config.headers['Content-Type'] = 'application/json';
                console.log("콘픽머임"+config);

                return config;
            },
            error => {
                Promise.reject(error)
            });
    }

    logout() {
        //sessionStorage.removeItem('authenticatedUser');
        localStorage.removeItem("token");
    }

    isUserLoggedIn() {
        const token = "Bearer"
        token = localStorage.getItem('token');
        console.log("===UserloggedInCheck===");
        console.log(token);

        if (token) {
            return true;
        }
        
        return false;
    }

    loginSuccessGetUserInfo(accessToken){
        return axios.post(LoginSuccessURL, {accessToken});
    }

    loginSuccessGetUserInfoList(accessToken){
        return axios.post('/auth/loginCheck', {accessToken});
    }

    getLoggedInUserInfo(user){
    }

    roleAdminCheck(){
    }

}

export default new AuthenticationService()