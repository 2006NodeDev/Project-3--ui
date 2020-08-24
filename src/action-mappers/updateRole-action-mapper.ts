import { updateRoleRemote } from "../remote/update-role-remote";

export const updateRoleTypes = {
    SUCCEFUL_UPDATE:'SUCCESSFULLY_UPDATED_ROLE',
    INTERNAL_SERVER: 'UPDATE_ROLE_INTERNAL_SERVER',
    UNAUTHORIZED: 'UPDATE_ROLE_UNAUTHORIZED'
}

export const updateRoleActionMapper = (currentUserId:string, email:string, role:string) => async (dispatch:any) =>{
    try {
        let body = { currentUserId, email, role };
        let response = 'Updated Role Successfully';
        await updateRoleRemote(body);
        dispatch({
            type:updateRoleTypes.SUCCEFUL_UPDATE,
            payload:{ 
                response
            }
        })
    } catch (error) {
        if(error.message.includes('401')){
            dispatch({
                type:updateRoleTypes.UNAUTHORIZED
            })
        } else{
            dispatch({
                type: updateRoleTypes.INTERNAL_SERVER
            })
        }
    }
}