import { client } from ".";

export const loginRemote = async (body:any) => {
    try{
        let response = await client.post('/login', body)
        console.log(response);

        client.defaults.headers.common['Authorization'] = response.headers.authorization
        document.cookie = `token=${response.headers.authorization}` //stores token in a cookie and potentially grabs it on startup

        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}