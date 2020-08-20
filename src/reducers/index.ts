import { combineReducers } from "redux";
import { updatePasswordReducer } from "./update-password-reducer";
import { updateRoleReducer } from "./update-role-reducer";
import { signUpRegisterReducer } from "./newUser-signUp-reducer";

export interface IUpdatePasswordState{
    Response:string,
    errorMessage:string
}

export interface IUpdateRoleState{
    Response:string,
    errorMessage:string
}

export interface ISignUp{
    Response: string,
    errorMessage: string
}

export interface IState{
    updatePasswordState:IUpdatePasswordState,
    updateRoleState:IUpdateRoleState,
    signupState: ISignUp,
}

export const state = combineReducers<IState>({
    updatePasswordState:updatePasswordReducer,
    updateRoleState:updateRoleReducer,
    signupState: signUpRegisterReducer,
})
