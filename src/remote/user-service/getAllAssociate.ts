
import { userServiceBaseClient } from "..";

export const getAllAssociates = async () => {
    try{
        let res = await userServiceBaseClient.get(`/user-service/associates/`)
        return res.data
    }catch(e){
        console.log(e);
    }
}