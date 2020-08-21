import { AnyAction } from "redux";
import { getRoleTypes } from "../action-mappers/getRole-action-mapper";
import { IGetRoleState } from ".";

const initialState:IGetRoleState = {
    currentRole: undefined,
    errorMessage: ''
}

export const getRoleReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case getRoleTypes.UNAUTHORIZED:{
            return {
                ...state,
                errorMessage:'You can only get your own role.'
            }
        }
        case getRoleTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        }
        case getRoleTypes.SUCCEFUL_UPDATE:{
            return{
                ...state,
                currentRole:action.payload.response
            }
        }
        default:
            return state;
    }
}