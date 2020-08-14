import { combineReducers } from "redux";
import { updatePasswordReducer } from "./update-password-reducer";

export interface IUpdatePasswordState{
    Response:string,
    errorMessage:string
}

export interface IState{
    updatePasswordState:IUpdatePasswordState,
}

export const state = combineReducers<IState>({
    updatePasswordState:updatePasswordReducer,
})
