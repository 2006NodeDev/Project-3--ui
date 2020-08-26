import { Profile } from "../../models/Profile";
import { profileServiceClient } from ".";


export const editCurrentProfile = async (updtPrfl:Profile) => {

    let authId = updtPrfl.auth0Id
    
    try{
        let response = await profileServiceClient.patch(`/${authId}`, updtPrfl)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}