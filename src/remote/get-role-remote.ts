import { userServiceBaseClient } from './index';

export const getRoleRemote = async (id:any) =>{
    try{
        let response = await userServiceBaseClient.get(`/getRole/${id}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}