import { client } from './index';

export const updateRoleRemote = async (body:any) =>{
    try{
        console.log(body)
        let response = await client.patch(`/updateRole`, body)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}