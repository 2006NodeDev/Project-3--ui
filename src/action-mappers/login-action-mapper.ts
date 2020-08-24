import { loginRemote } from "../remote/login";

export const loginTypes = {
    SUCCESSFUL_LOGIN:'SUCCESSFULLY_LOGGED_IN',
    BAD_CREDENTIALS:'BAD_CREDENTIALS',
    BAD_REQUEST:'BAD_REQUEST',
    INTERNAL_SERVER:'LOGIN_INTERNAL_SERVER',
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
        } else if(error.message.includes('401')){
            dispatch({
                type:loginTypes.BAD_CREDENTIALS
            })
        }else if (error.message === 'logout'){
            dispatch({
                type:loginTypes.USER_LOGOUT
            }) 
        }else{
            dispatch({
                type: loginTypes.INTERNAL_SERVER
            })
        }
    }
}