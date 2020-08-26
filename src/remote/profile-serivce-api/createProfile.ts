import { Profile } from "../../models/Profile";
import { profileServiceClient } from ".";


export const createProfile = async (newProfile:Profile) => {
    
    try{
        let response = await profileServiceClient.post(`/createProfile`, newProfile)
        console.log(response);
        return response.data
    } catch(e){
        console.log(e);
        return('Something went wrong')
    }
}