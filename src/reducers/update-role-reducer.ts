import { AnyAction } from "redux";
import { updateRoleTypes } from "../action-mappers/updateRole-action-mapper";
import { IUpdateRoleState } from ".";

const initialState:IUpdateRoleState = {
    Response: '',
    errorMessage: ''
}

export const updateRoleReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case updateRoleTypes.UNAUTHORIZED:{
            return {
                ...state,
                errorMessage:'Only Admin can change role.'
            }
        }
        case updateRoleTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        }
        case updateRoleTypes.SUCCEFUL_UPDATE:{
            return{
                ...state,
                Response:action.payload.response
            }
        }
        default:
            return state;
    }
}