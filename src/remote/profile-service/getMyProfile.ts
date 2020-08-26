import { profileServiceBaseClient } from "../index_profile";

export const getMyProfile = async (email:string) => {
    try{
        let res = await profileServiceBaseClient.get(`profile-service/profiles/email/${email}`)
        console.log(res)
        return res.data

    }catch(e){
        console.log(e);
    }
}