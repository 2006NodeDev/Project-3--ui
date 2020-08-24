
import { userServiceBaseClient } from "..";

export const getAllAssociates = async () => {
    try{
        let res = await userServiceBaseClient.get(`/Project-3-userservice/associates/`)
        return res.data
    }catch(e){
        console.log(e);
    }
}