
import { updatePasswordRemote } from "../remote/userService/update-password-remote";


export const updatePasswordTypes = {
    SUCCEFUL_UPDATE:'SUCCESSFULLY_UPDATED_PASSWORD',
    INTERNAL_SERVER: 'UPDATE_PASSWORD_INTERNAL_SERVER',
    UNAUTHORIZED: 'UPDATE_PASSWORD_UNAUTHORIZED'
}

export const updatePasswordActionMapper = (userId:string, password:string) => async (dispatch:any) =>{
    try {
        let body = { userId, password };
        let response = 'Updated Password Successfully';
        await updatePasswordRemote(body);
        dispatch({
            type:updatePasswordTypes.SUCCEFUL_UPDATE,
            payload:{ 
                response
            }
        })
    } catch (error) {
        if(error.message.includes('401')){
            dispatch({
                type:updatePasswordTypes.UNAUTHORIZED
            })
        } else{
            dispatch({
                type: updatePasswordTypes.INTERNAL_SERVER
            })
        }
    }
}