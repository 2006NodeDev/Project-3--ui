import { FunctionComponent, useState, SyntheticEvent } from "react"
import { createStyles, makeStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { toast } from "react-toastify"
import { User } from "@auth0/auth0-react/dist/auth-state"
import React from "react"
import { TextField, Button } from "@material-ui/core"
import { submitSignUpRemote } from "../../remote/user-service/newUserSignup"
import { useDispatch } from "react-redux"
import { signUpActionMapper } from "../../action-mappers/signup-register-action-mapper"
import { deepOrange } from "@material-ui/core/colors";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form:{
     fontFamily:'arial',
     color:'#000000',
     width: '100%',
     marginTop: 10,
    },
    h2:{
    fontFamily:'arial'
    },
    Button: {
        backgroundColor:'#F26926',
        color:'#ffffff',
        minWidth: 160,
        height:55,
        borderRadius: 25
        
    },
    component: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
  
    const classes = useStyles();

    let [preferredName, changePreferredName] = useState('')
    let [lastName, changeLastName] = useState('')
    let [email, changeEmail] = useState('')
    let [password, changePassword] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')
    let [connection, changeConnection] = useState('')

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
    /*
    const updateConnection = (e:any) => {
        e.preventDefault()
        changeConnection(e.currentTarget.value)
    }
    */
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
            let res = await submitSignUpRemote(newUser)
            console.log(res)
            let thunk = signUpActionMapper(email, password, {user_metadata:{preferredName, lastName}}, connection);
            dispatch(thunk);
        } 
        
    }

    return (
        <div>
            
            <h2 className = {classes.h2}>Associate Companion Sign Up</h2>
            <form onSubmit={submitUser} className ={classes.form}>  
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" variant="outlined" label="Preferred Name" value={preferredName} onChange={updatePreferredName} /><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined" label="Last Name" value={lastName} onChange={updateLastName}/><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined" label="Email" value={email} onChange={updateEmail} /><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined" type='password' label="Password" value={password} onChange={updatePassword}/><br /> <br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined" type='password' label="Confirm Password" value={confirmPassword} onChange={updateConfirmPassword}/> <br />
                <br/>
                </ThemeProvider>
                <Button className ={classes.Button}  variant="contained" type='submit'>Sign Up</Button>
                
            </form>
        </div>
    )
}
