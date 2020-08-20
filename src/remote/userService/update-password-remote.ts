import { userServiceBaseClient} from '../index'

export const updatePasswordRemote = async (body:any) => {
    try {
        let response = await userServiceBaseClient.patch('/updatePassword', body);
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}