import { useDispatch, useSelector } from 'react-redux';
import { updateRoleActionMapper } from '../../action-mappers/updateRole-action-mapper';
import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import { createStyles, makeStyles, Theme, InputLabel, Select, FormControl, Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { IState } from '../../reducers';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        component: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        btn: {
            background: "#61dafb",
            borderColor: "#61dafb"
        },
        input: {
            '&:before': {
                borderRadius: 4,
                borderColor: "#f26926",
                boxShadow: "#f26926"
            },
            '&:after': {
                borderRadius: 4,
                borderColor: "#f26926",
                boxShadow: "#f26926"
            }
        }
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
    },
});

export const UpdateRoleComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [role, changeRole] = useState('');

    const updateRole = (e: any) => {
        e.preventDefault();
        changeRole(e.currentTarget.value);
        console.log(role);

    }

    let currentUser = useSelector((state: IState) => {
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
        <Container className={classes.component} maxWidth="xs">
            <div>
                <h2>Update A Role</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Role</InputLabel>
                    <ThemeProvider theme={theme}>
                        <Select className={classes.input} inputProps={{
                            name: 'role',
                            id: 'age-native-simple',
                        }}>
                            <option value='Associate'>Associate</option>
                            <option value='Trainer'>Trainer</option>
                            <option value='Admin'>Admin</option>
                        </Select>
                    </ThemeProvider>
                </FormControl>
                <br /><br />
                <button className={classes.btn} color="default" type="submit" > Submit </button>
            </div>
        </Container>
    )

}
