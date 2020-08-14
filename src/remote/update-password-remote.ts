import { client } from './index';

export const updatePasswordRemote = async (body:any) => {
    try {
        let response = await client.patch('/updatePassword', body);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}