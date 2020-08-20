import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';
import { loginActionMapper } from '../../action-mappers/login-action-mapper';
import { useDispatch } from 'react-redux';

interface ILoginProps extends RouteComponentProps {
    changeCurrentUser: (newUser:any) => void
}

export const LoginComponent:FunctionComponent<ILoginProps> = (props) => {
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const updateUsername = (event:any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }

    let dispatch = useDispatch();

    const loginSubmit = async (event:SyntheticEvent) => {
        event.preventDefault()
        
        if (!username || !password) {
            toast.error('You have entered an incorrect username or password', {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'foo-bar'
              })
        }

        try {
            let thunk = await loginActionMapper(username, password)
            dispatch(thunk)
            changePassword('')
            props.history.push('/')
        } catch(error) {
            console.log(error);   
        }
    }

    return(
        <div>
            <input name="username" placeholder="username" value={username} onChange={updateUsername}></input>
            <input type="password" name="password" placeholder="password" value={password} onChange={updatePassword}></input>
            <button className="btn " type="submit" onClick={loginSubmit}> Submit </button>
        </div>
    )
}