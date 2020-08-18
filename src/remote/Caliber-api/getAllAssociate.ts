import {caliberBaseClient} from '../index'

export const getAllAssociates = async () => {
    try{
        let res = await caliberBaseClient.get(`/associates/`)
        return res.data
    }catch(e){
        console.log(e);
    }
}