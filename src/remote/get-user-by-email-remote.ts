import { userServiceBaseClient } from './index';

export const getUserByEmailRemote = async (email: string) =>{
    try{
        let response = await userServiceBaseClient.get(`/user/email/${email}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}