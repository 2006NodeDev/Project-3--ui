import { combineReducers } from "redux";
import { updatePasswordReducer } from "./update-password-reducer";
import { updateRoleReducer } from "./update-role-reducer";
import { User } from "../models/User";
import { signUpRegisterReducer } from "./newUser-signUp-reducer";
import { Role } from "../models/Role"
import { loginReducer } from "./login-reducer";
import { getRoleReducer } from "./get-role-reducer";


export interface IUpdatePasswordState{
    Response:string,
    errorMessage:string
}

export interface IUpdateRoleState{
    Response:string,
    errorMessage:string
}

export interface IGetRoleState{
    currentRole?:Role,
    errorMessage:string
}

export interface ILoginState{
    currentUser?:User,
    errorMessage:string
}

export interface ISignUpState{
    Response: string,
    errorMessage: string
}


export interface IState{
    updatePasswordState:IUpdatePasswordState,
    updateRoleState:IUpdateRoleState,
    signupState: ISignUpState,
    loginState: ILoginState,
    getRoleState: IGetRoleState,
}

export const state = combineReducers<IState>({
    updatePasswordState:updatePasswordReducer,
    updateRoleState:updateRoleReducer,
    signupState: signUpRegisterReducer,
    loginState: loginReducer,
    getRoleState: getRoleReducer
})