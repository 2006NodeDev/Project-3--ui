import { userServiceBaseClient } from "..";

export const loginRemote = async (body:any) => {
    try{
        let response = await userServiceBaseClient.post('/user-service/login', body)
        console.log(response);

        userServiceBaseClient.defaults.headers.common['Authorization'] = response.headers.authorization
        document.cookie = `token=${response.headers.authorization}` //stores token in a cookie and potentially grabs it on startup

        return response.data
    } catch(e){
        throw(e)
    }
}