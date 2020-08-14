import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePasswordActionMapper } from '../../action-mappers/updatePassword-action-mapper';

export const UpdatePasswordComponent:FunctionComponent<any> = (props) => {
    let [password1, changePassword1] = useState('');
    let [password2, changePassword2] = useState('');

    const updatePassword1 = (e:any) =>{
        e.preventDefault();
        changePassword1(e.currentTarget.value);
    }

    const updatePassword2 = (e:any) =>{
        e.preventDefault();
        changePassword2(e.currentTarget.value);
    }

    // let currentUser = useSelector((state:IState)=>{
    //     return state.loginState.currentUser
    // })

    let dispatch = useDispatch();

    const submitPassword = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            if (password1 !== password2){
                toast.error('Passwords Do Not Match')
            } else {
                let thunk = await updatePasswordActionMapper(1, password1); // replace 1 with currentUser.userId
                dispatch(thunk);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input type="password" name="password1" placeholder="new password" value={password1} onChange={updatePassword1}></input>
            <input type="password" name="password2" placeholder="new password" value={password2} onChange={updatePassword2}></input>
            <button className="btn " type="submit" onClick={submitPassword}> Submit </button>
        </div>
    )
}
