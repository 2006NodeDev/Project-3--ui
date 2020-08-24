import React, { FunctionComponent, SyntheticEvent } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginActionMapper } from "../../action-mappers/login-action-mapper";
import { IState } from "../../reducers";
import '../../App.css'
import { Button } from "@material-ui/core";


interface ILogoutProps extends RouteComponentProps {
    changeCurrentUser:(user:any)=> void
    user: any | null
}

export const LogoutComponent:FunctionComponent<ILogoutProps> = (props) => {
    let dispatch = useDispatch()
    
    const logoutSubmit = async (e:SyntheticEvent) => {
        e.preventDefault()
        props.changeCurrentUser(null)
        props.history.push('/login')

       let thunk = loginActionMapper('logout', 'logout')
      //  dispatch(thunk)
    } 
    
    return(
        <div>
            <Button id='logout' onClick={logoutSubmit}>Logout</Button>
        </div>
    )

}