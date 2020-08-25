import axios from 'axios'
import { acBaseUrl } from '../environment'

//an optional env for host address or localhost default
//this is the caliber IP (?)

export const userServiceBaseClient = axios.create({
<<<<<<< HEAD
    baseURL: acBaseUrl,
=======
    baseURL:acBaseUrl,
>>>>>>> 48f9c8c45d45f89a8f2d250000887867d0c10b70
    headers:{
        'Content-Type':'application/json'
    },
})
