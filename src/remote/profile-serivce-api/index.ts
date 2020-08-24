import axios from 'axios'
import { pcBaseUrl } from '../../environment'

export const profileServiceClient = axios.create({
    baseURL: pcBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    //withCredentials:true
})