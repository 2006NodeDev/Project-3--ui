import { Associate } from "./associate"
import { Batch } from "./Batch"

export interface Profile{
    firstName: Associate["firstName"]; 
    lastName: Associate["lastName"]; 
    auth0Id: Associate["salesforceId"];
    email: Associate["email"]; 
    batchId: Batch["batchId"];
    nickname: string;
    pronouns: string;
    hobbies: string;
    favFoods: string;
    specialTrait: string;
    degree: string;
    favLanguage: string;
    relevantSkills: string;
    introvert: Boolean;
    studyGroup: Boolean;
   // aboutMe: string  deleted since it was not in the profile user service, replaced with special trait  
}