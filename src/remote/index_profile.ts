import axios from 'axios'

//an optional env for host address or localhost default
//this is the caliber IP (?)
let baseURL = 'http://localhost:80/profile-service'

export const profileServiceBaseClient = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
    //     'Referer' : 'website.js-army.com'
    },
})
