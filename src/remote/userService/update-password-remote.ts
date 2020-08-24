import { userServiceBaseClient} from '../index'

export const updatePasswordRemote = async (body:any) => {
try { 
        //needs to include path to that service (the repo name) as the base path
        let response = await userServiceBaseClient.patch('/Project-3-userservice/updatePassword', body);

        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}