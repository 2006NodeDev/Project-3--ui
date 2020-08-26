import { FunctionComponent, useState, SyntheticEvent, useEffect } from "react"
import { toast } from "react-toastify"
import { User } from "@auth0/auth0-react/dist/auth-state"
import React from "react"
import { TextField, Button, makeStyles, Theme, createStyles, createMuiTheme, Container, Grid, Typography, ThemeProvider } from "@material-ui/core"

import { useDispatch, useSelector } from "react-redux"
import { signUpActionMapper } from "../../action-mappers/signup-register-action-mapper"
import { deepOrange } from "@material-ui/core/colors"
import { submitSignUpRemote } from "../../remote/user-service/newUserSignup"
//import { IState } from "../../reducers"


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

export const NewUserComponent:FunctionComponent<any> = (props) => {
   
    /*
    const errorMessage = useSelector((state:IState)=>{
        return state.loginState.errorMessage
    })
    */
    const classes = useStyles();

    let [preferredName, changePreferredName] = useState('')
    let [lastName, changeLastName] = useState('')
    let [email, changeEmail] = useState('')
    let [password, changePassword] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')
    let [connection] = useState('')

    const updatePreferredName = (e:any) => {
        e.preventDefault()
        changePreferredName(e.currentTarget.value)
    }
    const updateLastName = (e:any) => {
        e.preventDefault()
        changeLastName(e.currentTarget.value)
    }

    const updateEmail = (e:any) => {
        e.preventDefault()
        changeEmail(e.currentTarget.value)
    }
    const updatePassword = (e:any) => {
        e.preventDefault()
        changePassword(e.currentTarget.value)
    }
    const updateConfirmPassword = (e:any) => {
        e.preventDefault()
        changeConfirmPassword(e.currentTarget.value)
    }
   
    let dispatch = useDispatch();
 
    const submitUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('Password Do Not Match')
        } else {
            let newUser:User ={
                email,
                password,
                user_metadata:{preferredName, lastName},
                connection: "Username-Password-Authentication",
            }
            /*
            if (!email.includes("@mock.com")){
                toast.error('Not valid email address', {
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: 'foo-bar'
                })
            }
            */
            let res = await submitSignUpRemote(newUser)
            console.log(res)
            let thunk = signUpActionMapper(email, password, {user_metadata:{preferredName, lastName}}, connection);
            dispatch(thunk);
        } 
    } 
    /*
    useEffect(()=>{
        if(errorMessage){
            toast.error(errorMessage)
            //should reset the error message after we toast
            dispatch(SignUpError())
        }
    })
    */
    return (
        <Container component="main" maxWidth="xs">
        <div className={classes.component}>
            <Grid container spacing={1}>
                <Grid item>
                    <img className={classes.logo} src="https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png" />
                    <br /><br />
                    <Typography variant="h6" className={classes.font}>
                        Sign Up
                </Typography>
                <form onSubmit={submitUser} className={classes.form}>
                <ThemeProvider theme={theme}>
                     <TextField variant="outlined" margin="normal"
                                    fullWidth
                                    required
                                    id="standard-basic" label="Preferred Name" value={preferredName} onChange={updatePreferredName} />
                    
                     <TextField variant="outlined" margin="normal"
                                    fullWidth
                                    required id="standard-basic" label="Lastname" value={lastName} onChange={updateLastName}/>
                   
                    <TextField variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    required
                                    id="username"
                                    label="Email"
                                    name="email"
                                    defaultValue="@mock.com"
                                    // value={username}
                                     onChange={updateEmail} />
                  
                    <TextField variant="outlined" margin="normal"
                                    fullWidth
                                    required id="standard-basic" type='password' label="Password" value={password} onChange={updatePassword}/>
                  
                    <TextField variant="outlined" margin="normal"
                                    fullWidth
                                    required id="standard-basic" type='password' label="Confirm" value={confirmPassword} onChange={updateConfirmPassword}/>
                    <br/>
                    <Button variant="contained" type='submit' className={classes.button} >Submit</Button>
                    </ThemeProvider>
                 </form>
                </Grid>
            </Grid>
            </div>
        </Container>
    )
}
