import { loginRemote } from "../remote/login";
import { toast } from "react-toastify";

export const loginTypes = {
    SUCCESSFUL_LOGIN:'SUCCESSFULLY_LOGGED_IN',
    BAD_CREDENTIALS:'BAD_CREDENTIALS',
    BAD_REQUEST:'BAD_REQUEST',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    INTERNAL_SERVER:'LOGIN_INTERNAL_SERVER',
    RESET_ERROR: 'RESET_ERROR',
    USER_LOGOUT: 'USER_LOGOUT'
}

export const loginActionMapper = (username:string, password:string) => async (dispatch:any) => {
    try  {
        if (username === 'logout'){
           throw Error('logout') 
        }
        let body = { username, password };
        let response = await loginRemote(body);
        
        dispatch({
            type: loginTypes.SUCCESSFUL_LOGIN,
            payload: {
                response
            }
       })
    } catch(error) {
        if(error.message.includes('400')){
            dispatch({
                type:loginTypes.BAD_REQUEST
            })
            toast.error('Please fill out all fields')
        } else if(error.message.includes('401')){
            dispatch({
                type:loginTypes.BAD_CREDENTIALS
            })
            toast.error('Bad Credentials')
        } else if(error.message.includes('404')) {
            dispatch({
                type:loginTypes.USER_NOT_FOUND
            })
        } else if (error.message === 'logout'){
            dispatch({
                type:loginTypes.USER_LOGOUT
            }) 
        }else{
            dispatch({
                type: loginTypes.INTERNAL_SERVER
            })
            toast.error('Server Error')
        }
    }
}

export const loginErrorReset = () =>{
    return{
        type:loginTypes.RESET_ERROR
    }
}
