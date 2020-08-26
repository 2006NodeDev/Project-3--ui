import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { IState } from '../../reducers';
import { getRoleActionMapper } from '../../action-mappers/getRole-action-mapper';

export const GetRoleComponent:FunctionComponent<any> = (props) => {

    let currentUser = useSelector((state:IState)=>{
        return state.loginState.currentUser
    })


    let dispatch = useDispatch();

    const getRole = async () => {
        try {
            let id = currentUser.userId
            let thunk = await getRoleActionMapper(id)
            dispatch(thunk)
            props.history.push('/home')
        } catch (error) {
            console.log(error);
        }
    }

    if (currentUser){
        getRole()
    }

    return(
        <div> Loading... </div>
    )
}