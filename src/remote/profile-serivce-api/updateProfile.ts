import { Profile } from "../../models/Profile";
import { profileServiceClient } from ".";


export const editCurrentProfile = async (updtPrfl:Profile) => {

    try{
        let response = await profileServiceClient.patch(`/users`, updtPrfl)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}