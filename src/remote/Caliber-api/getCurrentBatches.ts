import {caliberBaseClient} from '..'

export const getCurrentBatches = async () => {
    try{
        let res = await caliberBaseClient.get(`/batch/current/`)
        return res.data
    }catch(e){
        throw (e)

    }
}