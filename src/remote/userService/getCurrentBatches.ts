import {userServiceBaseClient} from '..'

export const getCurrentBatches = async () => {
    try{
        let res = await userServiceBaseClient.get(`/Project-3-userservice/associates/currentBatches/`)
        return res.data
    }catch(e){
        console.log(e);
    }
}