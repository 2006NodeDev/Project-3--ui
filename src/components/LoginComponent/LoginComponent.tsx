import React, { FunctionComponent, useState, SyntheticEvent } from 'react';
import { toast } from 'react-toastify';
import { loginActionMapper } from '../../action-mappers/login-action-mapper';
import { useDispatch } from 'react-redux';
import { Grid, Typography, TextField, Button, Theme, Container, createMuiTheme } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles, createStyles, withStyles, ThemeProvider } from '@material-ui/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        logo: {
            maxHeight: 100
        },
        component: {
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%',
            marginTop: 10,
        },
        button: {
            color: "#474c55",
            cursor: 'pointer',
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
        },
        font: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
        },
        links: {
            color: "#f26925",
            fontWeight: 'bold',
        },
    }),
);

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
    },
});

export const LoginComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const updateUsername = (event: any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }
    const updatePassword = (event: any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }

    let dispatch = useDispatch();

    const loginSubmit = async (event: SyntheticEvent) => {
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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.component}>
                <Grid container spacing={1}>
                    <Grid item>
                        <img className={classes.logo} src="https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png" />
                        <br /><br />
                        <Typography variant="h6" className={classes.font}>
                            Login with registered email
                    </Typography>
                        <form autoComplete="off" onSubmit={loginSubmit} noValidate className={classes.form}>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="username"
                                    label="Email"
                                    name="email"
                                    defaultValue="@revature.net"
                                    // value={username}
                                    onChange={updateUsername}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="password"
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={password}
                                    onChange={updatePassword}
                                />
                            </ThemeProvider>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.button}
                            >
                                Login
                        </Button>
                            <br /><br /><br />
                            <Grid>
                                <Link href="/register" variant="body2" underline="none" className={classes.links}>
                                    {"Don't have an account? Sign up here!"}
                                </Link>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}