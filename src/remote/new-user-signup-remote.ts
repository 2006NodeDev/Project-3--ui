
import { userServiceBaseClient } from ".";



export const submitSignUpRemote = async (body:any) => {

    try{
        let response = await userServiceBaseClient.post('/register', body)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
} 