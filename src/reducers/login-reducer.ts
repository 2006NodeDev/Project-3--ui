import { ILoginState } from ".";
import { AnyAction } from "redux";
import { loginTypes } from "../action-mappers/login-action-mapper";

const initialState:ILoginState = {
    currentUser:undefined,
    errorMessage: ''
}

export const loginReducer = (state=initialState, action:AnyAction) => {
    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {
                ...state,
                currentUser:action.payload.response
            }
        }
        case loginTypes.BAD_REQUEST:{
            return {
                ...state,
                errorMessage:'Please Fill Out All Fields'
            }
        }
        case loginTypes.BAD_CREDENTIALS:{
            return {
                ...state,
                errorMessage:'Incorrect Username or Password'
            }
        }
        case loginTypes.INTERNAL_SERVER:{
            return {
                ...state,
                errorMessage:'Oops, Something Went Wrong'
            }
        } case loginTypes.USER_LOGOUT:{
            return {
                ...state,
                currentUser: undefined
            }
        }

        default:{
            return state
        }
    }
}