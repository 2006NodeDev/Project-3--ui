
import { profileServiceBaseClient } from "../index_profile";

export const getAllProfile = async () => {
    try{
        let res = await profileServiceBaseClient.get(`/profiles`)
        console.log(res)
        return res.data

    }catch(e){
        console.log(e);
    }
}