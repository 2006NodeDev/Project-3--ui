import React, { FunctionComponent, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getBatchIdByTrainer } from '../../remote/user-service-api/getbatchIDbyTrainer'
import { Batch } from '../../models/Batch'
import { batch } from 'react-redux'
import { AllAssociatesComponent } from '../AllAssociateComponent/AllAssociateComponent'
import { CurrentBatchesComponent } from '../CurrentBatchesComponent/CurrentBatches'


export const BatchbyTrainerEmailComponent:FunctionComponent <any> = (props) =>{
let [BatchProfile, changeBatchProfile] = useState <null | Batch> (null)
let {trainerEmail} = useParams()

//will run after every single render
useEffect(()=>{
    let getBatch = async()=>{
        //await user userinfo and than call state 
        let batchInfo = await getBatchIdByTrainer(trainerEmail)
        changeBatchProfile(batchInfo)
    }
    //havent gotten user profile yet
    //if(!BatchProfile|| BatchProfile.batchId !== +trainerEmail){
        getBatch()
    
})

return (

(BatchProfile)?
//add all batch component instead later
<AllAssociatesComponent batch={BatchProfile} />
:
<div>
<h1>User Not Found</h1>
</div>
)
}