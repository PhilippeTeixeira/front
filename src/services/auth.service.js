import axios from 'axios'

const API_URL = 'https://mighty-falls-43184-1878087393ca.herokuapp.com/api/auth/'

class AuthService {
    login(user) {
        return axios
        .post(API_URL + 'signin', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }
    
    logout() {
        localStorage.removeItem('user')
    }

    register(user) {
        return axios
        .post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        })
    }
}

export default new AuthService()

