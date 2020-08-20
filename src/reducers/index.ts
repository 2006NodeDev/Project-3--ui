import { combineReducers } from "redux";
import { updatePasswordReducer } from "./update-password-reducer";
import { updateRoleReducer } from "./update-role-reducer";
import { User } from "@auth0/auth0-react/dist/auth-state";

export interface IUpdatePasswordState{
    Response:string,
    errorMessage:string
}

export interface IUpdateRoleState{
    Response:string,
    errorMessage:string
}

export interface ILoginState{
    currentUser?:User,
    errorMessage:string
}

export interface IState{
    updatePasswordState:IUpdatePasswordState,
    updateRoleState:IUpdateRoleState,
}

export const state = combineReducers<IState>({
    updatePasswordState:updatePasswordReducer,
    updateRoleState:updateRoleReducer,
})
