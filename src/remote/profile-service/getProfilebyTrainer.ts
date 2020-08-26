import {profileServiceBaseClient} from "../index_profile";

export const getProfilebyTrainer = async (trainerEmail:string) => {

    try{
        let response = await profileServiceBaseClient.get(`/profiles/trainer/${trainerEmail}`)
        return response.data
    }
    catch(e){
        console.log(e);
        return('Something went wrong')
    }
    }

