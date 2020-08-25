import { FunctionComponent, useState, SyntheticEvent } from "react"
import { toast } from "react-toastify"
import { User } from "@auth0/auth0-react/dist/auth-state"
import React from "react"
import { TextField, Button } from "@material-ui/core"
import { submitSignUpRemote } from "../../remote/user-service/newUserSignup"
import { useDispatch } from "react-redux"
import { signUpActionMapper } from "../../action-mappers/signup-register-action-mapper"




export const NewUserComponent:FunctionComponent<any> = (props) => {
  
    //const classes = useStyles();

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
        props.history.push('/login')
    }


    return (
        <div>
            <form onSubmit={submitUser}>
            <fieldset>
                <TextField id="standard-basic" label="Preferred Name" value={preferredName} onChange={updatePreferredName} />
                <br/>
                <TextField id="standard-basic" label="Lastname" value={lastName} onChange={updateLastName}/>
                <br/>
                <TextField id="standard-basic" label="Email" value={email} onChange={updateEmail} />
                <br/>
                <TextField id="standard-basic" type='password' label="Password" value={password} onChange={updatePassword}/>
                <br/>
                <TextField id="standard-basic" type='password' label="Confirm" value={confirmPassword} onChange={updateConfirmPassword}/>
                <br/>
                <Button variant="contained" type='submit'>Submit</Button>
                
                </fieldset>
            </form>
        </div>
    )
}
