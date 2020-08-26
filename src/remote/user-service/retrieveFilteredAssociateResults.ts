import { userServiceBaseClient } from '../index'
import { joinResponses } from '../../utils/joinResponses'

export const retrieveFilteredAssociateResults = async (batchSkill:string, batchQuarter:string, batchYear:string) => {
    try{

        let skillResponse = await userServiceBaseClient.get(`user-service/associates/skill/${batchSkill}`)
        let yearResponse = await userServiceBaseClient.get(`user-service/associates/year/${batchYear}`)
        let quarterResponse = await userServiceBaseClient.get(`user-service/associates/quarter/${batchQuarter}`)
        let filteredAssociates = joinResponses( skillResponse.data, yearResponse.data, quarterResponse.data) 
        console.log(filteredAssociates)
        return filteredAssociates
    }
    catch(e){
        console.log(e)
        throw(e)
    }
}