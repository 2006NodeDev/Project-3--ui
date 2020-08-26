import { profileServiceBaseClient } from '../index'
import { joinResponses } from '../../utils/joinResponses'

export const retrieveFilteredProfileResults = async (batchSkill:string, batchQuarter:string, batchYear:string) => {
    try{

        let skillResponse = await profileServiceBaseClient.get(`/profile-service/profiles/skill/${batchSkill}`)
        let yearResponse = await profileServiceBaseClient.get(`/profile-service/profiles/year/${batchYear}`)
        let quarterResponse = await profileServiceBaseClient.get(`/profile-service/profiles/quarter/${batchQuarter}`)
        let filteredAssociates = joinResponses( skillResponse.data, yearResponse.data, quarterResponse.data) 
        console.log(filteredAssociates)
        return filteredAssociates
    }
    catch(e){
        console.log(e)
        throw(e)
    }
}