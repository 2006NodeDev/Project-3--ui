import React, { FunctionComponent} from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginActionMapper } from "../../action-mappers/login-action-mapper";

import '../../App.css'
import { Button, } from "@material-ui/core";
import { IState } from "../../reducers";
import { prototype } from "events";
import { store } from "../../store";
import { useAuth0 } from "@auth0/auth0-react";




interface ILogoutProps extends RouteComponentProps {
    changeCurrentUser:(user:any)=> void
    user: any | null
}

export const LogoutComponent:FunctionComponent<ILogoutProps> = (props) => {
  
    let dispatch = useDispatch()
    const { logout } = useAuth0();
    
    const logoutSubmit = async () => {
        let thunk = await loginActionMapper('logout', 'logout')
        dispatch(thunk) 
        //document.cookie = `token=${null}`
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
        logout({ returnTo: "http://localhost:3000"})

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
        <Redirect to='/login' / >        
    )
}