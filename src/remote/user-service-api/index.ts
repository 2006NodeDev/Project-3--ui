import axios from 'axios'
import { acBaseUrl } from '../../environment'

export const userServiceClient = axios.create({
    baseURL: acBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    //withCredentials:true
})