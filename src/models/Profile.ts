import { Associate } from "./associate"
import { Batch } from "./Batch"

export interface Profile{
    firstName: Associate["firstName"];  //might delete this since it is not in the profile service
    lastName: Associate["lastName"];  //might delete this since it is not in the profile service
    auth0Id: Associate["salesforceId"];
    email: Associate["email"];  //added this since it is in the profile service
    batchId: Batch["batchId"];
    nickname: string;
    pronouns: string;
    hobbies: string;
    favFoods: string;
    specialTrait: string;
    degree: string;
    favLanguage: string;
    relavantSkills: string;
    introvert: boolean;
    studyGroups: boolean;
   // aboutMe: string  deleted since it was not in the profile user service, replaced with special trait  
}