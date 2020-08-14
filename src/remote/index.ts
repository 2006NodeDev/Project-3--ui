import axios from 'axios'
import { acBaseUrl } from '../environment'

export const client = axios.create({
    baseURL:acBaseUrl,
    headers:{
        'Content-Type': 'application/json',
    },
})