import { useDispatch, useSelector } from 'react-redux';
import { updateRoleActionMapper } from '../../action-mappers/updateRole-action-mapper';
import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import { createStyles, makeStyles, Theme, InputLabel, Select, FormControl } from '@material-ui/core';
import { IState } from '../../reducers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const UpdateRoleComponent:FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [role, changeRole] = useState('');

    const updateRole = (e:any) =>{
        e.preventDefault();
        changeRole(e.currentTarget.value);
        console.log(role);
        
    }

    let currentUser = useSelector((state:IState)=>{
        return state.loginState.currentUser
    })
    
    let dispatch = useDispatch();

    const submitRole = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            let thunk = await updateRoleActionMapper(currentUser.userId, 'auth0|5f358d7fa1b41f0067816993', role); // Replace 1 with userID selected by Admin
            dispatch(thunk);
        } catch (error) {
            console.log(error);
        }
    }
    return (

        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Role</InputLabel>
                <Select native value={role} onChange={updateRole} inputProps={{
                    name: 'role',
                    id: 'age-native-simple',
                }}>
                    <option value='Associate'>Associate</option>
                    <option value='Trainer'>Trainer</option>
                    <option value='Admin'>Admin</option>
                </Select>
            </FormControl>
            <button className="btn " type="submit" onClick={submitRole}> Submit </button>
        </div>
    )

}
