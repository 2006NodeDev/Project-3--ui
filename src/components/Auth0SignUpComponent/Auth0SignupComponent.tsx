import { FunctionComponent, useState, SyntheticEvent } from "react"
import { createStyles, makeStyles, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { toast } from "react-toastify"
import { User } from "@auth0/auth0-react/dist/auth-state"
import React from "react"
import { TextField, Button,Typography,Container } from "@material-ui/core"
import { submitSignUpRemote } from "../../remote/user-service/newUserSignup"
import { useDispatch } from "react-redux"
import { signUpActionMapper } from "../../action-mappers/signup-register-action-mapper"
import { deepOrange } from "@material-ui/core/colors";


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
        },
    ));

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

    const updatePreferredName = (e: any) => {
        e.preventDefault()
        changePreferredName(e.currentTarget.value)
    }
    const updateLastName = (e: any) => {
        e.preventDefault()
        changeLastName(e.currentTarget.value)
    }

    const updateEmail = (e: any) => {
        e.preventDefault()
        changeEmail(e.currentTarget.value)
    }
    const updatePassword = (e: any) => {
        e.preventDefault()
        changePassword(e.currentTarget.value)
    }
    const updateConfirmPassword = (e: any) => {
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
        if (password !== confirmPassword) {
            toast.error('Password Do Not Match')
        } else {
            let newUser: User = {
                email,
                password,
                user_metadata: { preferredName, lastName },
                connection: "Username-Password-Authentication",
            }
            let res = await submitSignUpRemote(newUser)
            console.log(res)
            let thunk = signUpActionMapper(email, password, { user_metadata: { preferredName, lastName } }, connection);
            dispatch(thunk);
        } 
        props.history.push('/')
    }

    return (
        <Container component="main" maxWidth="xs">
                
        <div className={classes.component}>
             <img className={classes.logo} src="https://revature.com/wp-content/uploads/2017/08/rev-logo-2.png" />
                        <br /><br /><br />
            <Typography variant="h6" className={classes.font}>
                            Welcome to Associate Companion 
                    </Typography>{/*<br / */}
                    <Typography variant="h6" className={classes.font}>
                            Sign Up Here!!
                    </Typography>
            <form onSubmit={submitUser} className ={classes.form}>  
            <ThemeProvider theme={theme}>
                <TextField id="outlined-basic" variant="outlined" margin="normal"   fullWidth label="Preferred Name" value={preferredName} onChange={updatePreferredName} /><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined"  margin="normal"    fullWidth label="Last Name" value={lastName} onChange={updateLastName}/><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined"   margin="normal"   fullWidth label="Email" value={email} onChange={updateEmail} /><br /><br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined"  margin="normal"   fullWidth type='password' label="Password" value={password} onChange={updatePassword}/><br /> <br />
                {/* <br/> */}
                <TextField id="outlined-basic" variant="outlined"  margin="normal"    fullWidth type='password' label="Confirm Password" value={confirmPassword} onChange={updateConfirmPassword}/> <br />
                <br/>
                </ThemeProvider>
                <Button className ={classes.button}  variant="contained" type='submit'>Sign Up</Button>
                
            </form>
        </div>
       </Container>
    )
}
