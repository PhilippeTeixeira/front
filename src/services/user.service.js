import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/test/'

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all')
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() })
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() })
    }

    getProducerBoard() {
        return axios.get(API_URL + 'producer', { headers: authHeader() })
    }

    getCMBoard() {
        return axios.get(API_URL + 'cm', { headers: authHeader() })
    }
}

export default new UserService()