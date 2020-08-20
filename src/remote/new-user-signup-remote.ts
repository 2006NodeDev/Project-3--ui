
import { client } from ".";



export const submitSignUpRemote = async (body:any) => {

    try{
        let response = await client.post('/users', body)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
} 