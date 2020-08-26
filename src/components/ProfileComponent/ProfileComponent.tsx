import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMyProfile } from '../../remote/profile-service/getMyProfile'
import { UserDisplayComponent } from '../UserDisplayComponent/UserDisplayComponent'
import { Profile } from '../../models/Profile'

export const ProfileComponent:FunctionComponent<any> = (props)=>{
    let [userProfile, changeUserProfile] = useState<null | Profile>(null)
    let {userEmail} = useParams()
    useEffect(()=>{
        let getUser = async ()=>{
            let userInfo = await getMyProfile(userEmail)
            changeUserProfile(userInfo)
        }
        if(!userProfile || userProfile.email !== userEmail){
            getUser()
            console.log('in the getUser')
        }
        console.log(userProfile)
    })
    return(
        (userProfile)?
        <UserDisplayComponent profile={userProfile}/>
        :
        <div>
            <h3>User Not Found</h3>
        </div>
    )
}