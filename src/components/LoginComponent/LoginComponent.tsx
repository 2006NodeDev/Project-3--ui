import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';
import { loginActionMapper } from '../../action-mappers/login-action-mapper';
import { useDispatch } from 'react-redux';
import AppIcon from '../public/revaturelogo.jpg'

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'

export const LoginComponent:FunctionComponent<any> = (props) => {
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