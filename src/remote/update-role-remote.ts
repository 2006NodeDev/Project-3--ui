import { userServiceBaseClient } from './index';

export const updateRoleRemote = async (body:any) =>{
    try{
        console.log(body)
        let response = await userServiceBaseClient.patch(`/updateRole`, body)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}