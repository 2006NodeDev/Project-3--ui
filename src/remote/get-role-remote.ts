import { userServiceBaseClient } from './index';

export const getRoleRemote = async (id:any) =>{
    try{
        console.log(id)
        let response = await userServiceBaseClient.get(`/updateRole/${id}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}