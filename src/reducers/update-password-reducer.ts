import { AnyAction } from "redux";
import { updatePasswordTypes } from "../action-mappers/updatePassword-action-mapper";
import { IUpdatePasswordState } from ".";

const initialState:IUpdatePasswordState = {
    Response: '',
    errorMessage: ''
}

export const updatePasswordReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case updatePasswordTypes.UNAUTHORIZED:{
            return {
                ...state,
                errorMessage:'You can only change your own password.'
            }
        }
        case updatePasswordTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        }
        case updatePasswordTypes.SUCCEFUL_UPDATE:{
            return{
                ...state,
                Response:action.payload.response
            }
        }
        default:
            return state;
    }
}