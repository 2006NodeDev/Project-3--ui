
import { userServiceBaseClient } from '..'



export const getBatchIdByTrainer = async (trainerEmail:string) => {

    //let { trainerEmail } = req.params;


    try{

        //let trainerEmail = 'mock1005.employeee7113d5c-c49c-4fd6-b5eb-729bf54a5b6c@mock.com'
        let res = await userServiceBaseClient.get(`/associates/{$trainerEmail}`)
        console.log(res);

        return res.data

    }catch(e){
        console.log(e);
    }

}