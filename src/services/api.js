import axios from 'axios'
import Constants from '../config/constants'

const Api = axios.create({baseURL: Constants.baseUrl + "/api/v1"})

export default Api