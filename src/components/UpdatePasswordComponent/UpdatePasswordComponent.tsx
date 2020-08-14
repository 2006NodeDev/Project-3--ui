import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

export const UpdatePasswordComponent:FunctionComponent<any> = (props) => {
    let [password1, changePassword1] = useState('');
    let [password2, changePassword2] = useState('');

    const updatePassword1 = (e:any) =>{
        e.preventDefault();
        changePassword1(e.CurrentTarget.value);
    }

    const updatePassword2 = (e:any) =>{
        e.preventDefault();
        changePassword2(e.CurrentTarget.value);
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
                let thunk = await updatePassword(1, password1); // replace 1 with currentUser.userId
                dispatch(thunk);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input type="password1" name="password1" value={password1} placeholder="password" onChange={updatePassword1}></input>
            <input type="password2" name="password" value={password2} placeholder=" repeat password" onChange={updatePassword2}></input>
            <button className="btn " type="submit" onClick={submitPassword}> Submit </button>
        </div>
    )
}
