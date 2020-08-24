import React, { FunctionComponent, SyntheticEvent } from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginActionMapper } from "../../action-mappers/login-action-mapper";

import '../../App.css'
import { Button, makeStyles } from "@material-ui/core";
import { IState } from "../../reducers";



interface ILogoutProps extends RouteComponentProps {
    changeCurrentUser:(user:any)=> void
    user: any | null
}

export const LogoutComponent:FunctionComponent<ILogoutProps> = (props) => {
  
    let dispatch = useDispatch()
  
    const logoutSubmit = async () => {
        let thunk = await loginActionMapper('logout', 'logout')
        dispatch(thunk) 
    } 
    
    logoutSubmit()
    let currentUser = useSelector((state:IState)=>{
        return state.loginState.currentUser
    })

    if(currentUser = undefined){
        props.history.push('/login')
    }

    return(    
        (currentUser)?   
        <Button variant="contained"  onClick={logoutSubmit} >Logout</Button>   
        :
        <Redirect to='/login' />        
    )
}