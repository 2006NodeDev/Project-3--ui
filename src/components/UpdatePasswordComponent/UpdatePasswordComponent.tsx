import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { toNamespacedPath } from 'path';

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

    const submitPassword = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (password1 != password2){
            toast.error('Passwords Do Not Match')
        } else {
            let res = await updatePassword(currentUser.userId, password);
        }
    }

    return (
        <div>
            
        </div>
    )
}
