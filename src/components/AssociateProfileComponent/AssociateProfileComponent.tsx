import React, { FunctionComponent, useState, SyntheticEvent } from "react";
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import { Profile } from "../../models/Profile";
import { editCurrentProfile } from "../../remote/profile-serivce-api/updateProfile";


export const AssociateProfileComponent:FunctionComponent<any> = () => {
    const [auth0Id, noChange0] = useState('')
    const [firstName, noChange1] = useState('')
    const [lastName, noChange2] = useState('')
    const [nickname, noChange3] = useState('')
    const [batchId, noChange4] = useState('')
    const [email, noChange5] = useState('')
    const [pronouns, changePronouns] = useState('')
    const [hobbies, changeHobbies] = useState('')
    const [favFoods, changeFavFoods] = useState('')
    const [specialTrait, changeSpecialTrait] = useState('')
    const [degree, changeDegree] = useState('')
    const [favLanguage, changeFavLanguage] = useState('')
    const [relevantSkills, changeRelevantSkills] = useState('')
    const [introvert, changeIntrovert] = useState(false)
    const [studyGroup, changeStudyGroup] = useState(false)

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
    const updateIntrovert = (event: any) => {
        event.preventDefault()
        changeIntrovert(event.currentTarget.value)
    }
    const updateStudyGroup = (event: any) => {
        event.preventDefault()
        changeStudyGroup(event.currentTarget.value)
    }
    const registerSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
    
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
          studyGroup
        }      
        await editCurrentProfile(updatedProfile)
      }
    return(
        <div>
          <p>Update preferences for {nickname} ({firstName} {lastName}) by filling out and submitting the form below.</p>
          <form onSubmit={registerSubmit}>
            <TextField id="firstName" label="First Name" value={firstName}/><br/>
            <TextField id="pronouns" label="Preferred Pronouns:" onChange={updatePronouns} /><br/>
            <TextField id="hobby" label="Hobby:" onChange={updateHobbies} /><br/>
            <TextField id="favFoods" label="Favorite Foods:"  onChange={updateFavFoods}/><br/>
            <TextField id="specialTrait" label="Special Trait:"  onChange={updateSpecialTrait}/><br/>
            <TextField id="degree" label="Degree:"  onChange={updateDegree}/><br/>
            <TextField id="favLanguage" label="Favorite Language" onChange={updateFavLanguage}/><br/>
            <TextField id="relevantSkills" label="Relevant Skills:"  onChange={updateRelevantSkills}/><br/><br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Personality Type:</FormLabel>
                <RadioGroup aria-label="introvert" name="introvert" onChange={updateIntrovert}>
                    <FormControlLabel value={true} control={<Radio />} label="Introvert" />
                    <FormControlLabel value={false} control={<Radio />} label="Extrovert" />
                </RadioGroup>
            </FormControl><br/><br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Looking for a Study Group:</FormLabel>
                <RadioGroup aria-label="studyGroup" name="studyGroup" onChange={updateStudyGroup}>
                    <FormControlLabel value={true} control={<Radio />} label="True" />
                    <FormControlLabel value={false} control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl><br/>
            <Button type="submit" variant="contained">
                Submit
            </Button>
          </form>  
        </div>
    );
} 