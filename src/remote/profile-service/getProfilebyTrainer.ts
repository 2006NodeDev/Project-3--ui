import {profileServiceBaseClient} from "../index";

export const getProfilebyTrainer = async (trainerEmail:string) => {

    try{
        let response = await profileServiceBaseClient.get(`/profile-service/profiles/trainer/${trainerEmail}`)
        return response.data
    }
    catch(e){
        console.log(e);
        return('Something went wrong')
    }
    }

