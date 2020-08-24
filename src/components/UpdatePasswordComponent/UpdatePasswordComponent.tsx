import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePasswordActionMapper } from '../../action-mappers/updatePassword-action-mapper';

//MUI
import {Grid, TextField, Button, InputAdornment, createMuiTheme, Theme} from '@material-ui/core'
import {AccountCircle, LockRounded} from '@material-ui/icons'
import {deepOrange} from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme)=>createStyles({
    button:{
        color: "#f26925",
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    }),
);
const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
    },
});

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
                <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{padding:10}}>
                    <div/>
                    <div style={{display: "flex", flexDirection: "column", 
                    maxWidth: 400,
                    minWidth: 300,
                 }}>
                        <Grid container justify="center">
                            <img src="images/revaturelogo.jpg" width={200}
                            alt="revaturelogo"
                            />
                        </Grid>
                        <TextField
                        type="password"
                        label="Current Password" margin="normal"
                        InputProps={{ startAdornment: ( <InputAdornment position="start">
                        <LockRounded />
                        </InputAdornment>
                        ),
                        }}
                        />
                        <TextField 
                        type="password"
                        label="New Password" margin="normal"
                        InputProps={{ startAdornment: ( <InputAdornment position="start">
                        <LockRounded />
                        </InputAdornment>
                        ),
                        }}
                        />
                        <TextField 
                        type="password"
                        label="Confirm Password" margin="normal"
                        InputProps={{ startAdornment: (
                        <InputAdornment position="start">
                        <LockRounded/>
                        </InputAdornment>
                        ),
                        }}
                        />
                        <div style={{height:20}}/>
                       <Button color="primary"
                       variant="contained">
                        Update Password
                        </Button>
                        </div>
        
                    <div/>

                </Grid>
                </div>
    )}

             {/* <input type="password" name="password1" placeholder="new password" value={password1} onChange={updatePassword1}></input>
            <input type="password" name="password2" placeholder="new password" value={password2} onChange={updatePassword2}></input>
            <button className="btn " type="submit" onClick={submitPassword}> Submit </button> */}
        

