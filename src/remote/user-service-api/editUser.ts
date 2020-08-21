import { Profile } from "../../models/Profile";
import { userServiceClient } from ".";
import { Associate } from "../../models/associate";


export const editCurrentUser = async (editUser:Associate) => {

    try{
        let response = await userServiceClient.patch(`/users`, editUser)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}