import { signUptypes } from "../action-mappers/signup-register-action-mapper"
import { AnyAction } from "redux"
import { ISignUpState } from "."


const initialState:ISignUpState = {
    Response: '',
    errorMessage: ''
}

export const signUpRegisterReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case signUptypes.MISSING_FIELD:{
            return {
                ...state,
                errorMessage:'Please fill out all necessary fields.'
            }
        }
        case signUptypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        }
        case signUptypes.SUCCEFUL_SIGNEDUP:{
            return{
                ...state,
                Response:action.payload.response
            }
        }
        default:
            return state;
    }
}