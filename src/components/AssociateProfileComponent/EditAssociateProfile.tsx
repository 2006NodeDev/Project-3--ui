import React, { FunctionComponent, useState, SyntheticEvent } from "react";
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { Profile } from "../../models/Profile";
import { editCurrentProfile } from "../../remote/profile-serivce-api/updateProfile";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";


export const EditAssociateProfile: FunctionComponent<any> = (props) => {

    let currentUser = useSelector((state: IState) => {
        return state.loginState.currentUser
    })

    // const [value, setValue] = React.useState('true');

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue((event.target as HTMLInputElement).value);
    //   };    

    const [firstName, changeFirstName] = useState('')
    const [lastName, changeLastName] = useState('')
    const [nickname, changeNickname] = useState('')
    const [pronouns, changePronouns] = useState('')
    const [hobbies, changeHobbies] = useState('')
    const [favFoods, changeFavFoods] = useState('')
    const [specialTrait, changeSpecialTrait] = useState('')
    const [degree, changeDegree] = useState('')
    const [favLanguage, changeFavLanguage] = useState('')
    const [relevantSkills, changeRelevantSkills] = useState('')
    // const [introvert, changeIntrovert] = useState(Boolean)
    // const [studyGroup, changeStudyGroup] = useState(Boolean)


    const updateFirstName = (event: any) => {
        event.preventDefault()
        changeFirstName(event.currentTarget.value)
    }
    const updateLastName = (event: any) => {
        event.preventDefault()
        changeLastName(event.currentTarget.value)
    }
    const updateNickname = (event: any) => {
        event.preventDefault()
        changeNickname(event.currentTarget.value)
    }
    const updatePronouns = (event: any) => {
        event.preventDefault()
        changePronouns(event.currentTarget.value)
    }
    const updateHobbies = (event: any) => {
        event.preventDefault()
        changeHobbies(event.currentTarget.value)
    }
    const updateFavFoods = (event: any) => {
        event.preventDefault()
        changeFavFoods(event.currentTarget.value)
    }
    const updateSpecialTrait = (event: any) => {
        event.preventDefault()
        changeSpecialTrait(event.currentTarget.value)
    }
    const updateDegree = (event: any) => {
        event.preventDefault()
        changeDegree(event.currentTarget.value)
    }
    const updateFavLanguage = (event: any) => {
        event.preventDefault()
        changeFavLanguage(event.currentTarget.value)
    }
    const updateRelevantSkills = (event: any) => {
        event.preventDefault()
        changeRelevantSkills(event.currentTarget.value)
    }
    // const updateIntrovert = (event: any) => {
    //     event.preventDefault()
    //     changeIntrovert(event.currentTarget.value)
    // }
    // const updateStudyGroup = (event: any) => {
    //     event.preventDefault()
    //     changeStudyGroup(event.currentTarget.value)
    // }
    const registerSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()

        let auth0Id = currentUser.userId
        let email = currentUser.email
        let batchId = undefined
        let introvert = true
        let studyGroup = false

        let updatedProfile: Profile = {
            firstName,
            lastName,
            auth0Id,
            email,
            batchId,
            nickname,
            pronouns,
            hobbies,
            favFoods,
            specialTrait,
            degree,
            favLanguage,
            relevantSkills,
            introvert,
            studyGroup,
        }
        await editCurrentProfile(updatedProfile)
        props.history.push('/allProfile')
    }
    return (
        <div>
            <p>Update your profile by filling out and submitting the form below.</p>
            <form onSubmit={registerSubmit}>
                <TextField id="firstName" label="First Name:" value={firstName} onChange={updateFirstName} /><br />
                <TextField id="lastName" label="Last Name:" value={lastName} onChange={updateLastName} /><br />
                <TextField id="pronouns" label="Nickname:" value={nickname} onChange={updateNickname} /><br />
                <TextField id="pronouns" label="Preferred Pronouns:" value={pronouns} onChange={updatePronouns} /><br />
                <TextField id="hobby" label="Hobby:" value={hobbies} onChange={updateHobbies} /><br />
                <TextField id="favFoods" label="Favorite Foods:" value={favFoods} onChange={updateFavFoods} /><br />
                <TextField id="specialTrait" label="Special Trait:" value={specialTrait} onChange={updateSpecialTrait} /><br />
                <TextField id="degree" label="Degree:" value={degree} onChange={updateDegree} /><br />
                <TextField id="favLanguage" label="Favorite Language" value={favLanguage} onChange={updateFavLanguage} /><br />
                <TextField id="relevantSkills" label="Relevant Skills:" value={relevantSkills} onChange={updateRelevantSkills} /><br /><br />
                {/* <FormControl component="fieldset">
                    <FormLabel component="legend">Personality Type:</FormLabel>
                    <RadioGroup aria-label="social" name="social" value={introvert} onChange={handleChange}>
                        <FormControlLabel value={true} control={<Radio />} label="Introvert" />
                        <FormControlLabel value={false} control={<Radio />} label="Extrovert" />
                    </RadioGroup>
                </FormControl><br /><br />
                <FormControl component="fieldset">
                    <FormLabel component="legend">Looking for a Study Group:</FormLabel>
                    <RadioGroup aria-label="studyGroup" name="studyGroup" value={studyGroup} onChange={handleChange}>
                        <FormControlLabel value={true} control={<Radio />} label="True" />
                        <FormControlLabel value={false} control={<Radio />} label="False" />
                    </RadioGroup>
                </FormControl><br /> */}
                <Button type="submit" variant="contained">
                    Submit
            </Button>
            </form>
        </div>
    );
} 