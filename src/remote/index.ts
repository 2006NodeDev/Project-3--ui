import axios from 'axios'
import { acBaseUrl } from '../environment'

//an optional env for host address or localhost default
//this is the caliber IP (?)

export const userServiceBaseClient = axios.create({
    baseURL: acBaseUrl
    headers:{
        'Content-Type':'application/json'
    },
})
