import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../models/Profile'
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { AllProfileComponent } from '../AllProfileComponent/AllProfileComponent'
import { getProfilebyTrainer } from '../../remote/profile-service/getProfilebyTrainer'


export const AssociatebyTrainerComponent:FunctionComponent <any> = (props) =>{
let [associateProfile, changeProfile] = useState <null | Profile> (null)
let {trainerEmail} = useParams()

//will run after every single render
let currentUser = useSelector((state:IState)=>{
    return state.loginState.currentUser
})


useEffect(()=>{
    let getProfile = async()=>{
        let profileInfo =  await getProfilebyTrainer(trainerEmail)
        changeProfile(profileInfo)
    }
 if ( currentUser.email !== trainerEmail)
 {
     getProfile()
 }

})
return  (
    (associateProfile)?

    <AllProfileComponent Profile={associateProfile} />
    :
    <div>
    <h1> User Not Found</h1>
    </div>
)
}


