
import { profileServiceBaseClient } from "../index";

export const getAllProfile = async () => {
    try{
        let res = await profileServiceBaseClient.get(`/profile-service/profiles`)
        console.log(res)
        return res.data

    }catch(e){
        console.log(e);
    }
}