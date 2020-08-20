import { submitSignUpRemote } from "../remote/new-user-signup-remote";



export const signUptypes = {
    SUCCEFUL_SIGNEDUP:'SUCCESSFULLY_SIGNED_UP',
    INTERNAL_SERVER: 'SIGN_UP_INTERNAL_SERVER',
    MISSING_FIELD: 'SIGN_UP_MISSING_FIELD'
}


export const signUpActionMapper = (email:string, password:string, user_metadata:any) => async (dispatch:any) =>{
    try {
        let body = { email, password, user_metadata};
        let response = 'Sign Up Successful';
        await submitSignUpRemote(body);
        dispatch({
            type:signUptypes.SUCCEFUL_SIGNEDUP,
            payload:{ 
                response
            }
        })
    } catch (error) {
        if(error.message.includes('404')){
            dispatch({
                type:signUptypes.MISSING_FIELD
            })
        } else{
            dispatch({
                type: signUptypes.INTERNAL_SERVER
            })
        }
    }
}