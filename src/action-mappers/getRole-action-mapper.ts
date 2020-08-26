import { getRoleRemote } from "../remote/user-service/getRole";

export const getRoleTypes = {
    SUCCEFUL_UPDATE:'SUCCESSFULLY_GET_ROLE',
    INTERNAL_SERVER: 'GET_ROLE_INTERNAL_SERVER',
    UNAUTHORIZED: 'GET_ROLE_UNAUTHORIZED'
}

export const getRoleActionMapper = (id:string) => async (dispatch:any) =>{
    try {
        let response = await getRoleRemote(id);
        dispatch({
            type:getRoleTypes.SUCCEFUL_UPDATE,
            payload:{ 
                response
            }
        })
    } catch (error) {
        if(error.message.includes('401')){
            dispatch({
                type:getRoleTypes.UNAUTHORIZED
            })
        } else{
            dispatch({
                type: getRoleTypes.INTERNAL_SERVER
            })
        }
    }
}