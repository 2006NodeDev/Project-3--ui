import React, { FunctionComponent, useState, SyntheticEvent } from "react";
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Switch } from '@material-ui/core';
import { Profile } from "../../models/Profile";
import { editCurrentProfile } from "../../remote/profile-serivce-api/updateProfile";
import { getThemeProps } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";

interface IProfileDisplayProps {
    profile: Profile
}



export const AssociateProfileComponent:FunctionComponent<any> = (props) => {
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
        changeIntrovert(event.target.checked)
    }
    const updateStudyGroup = (event: any) => {
        event.preventDefault()
        changeStudyGroup(event.target.checked)
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
          {/*<p>Hello, {props.profile.nickname}! Let your batchmates get to know you by filling out your preferences below.</p>*/}
          <form onSubmit={registerSubmit}>
            <TextField id="pronouns" label="Preferred Pronouns:" onChange={updatePronouns} /><br/>
            <TextField id="hobby" label="Hobby:" onChange={updateHobbies} /><br/>
            <TextField id="favFoods" label="Favorite Foods:"  onChange={updateFavFoods}/><br/>
            <TextField id="specialTrait" label="Special Trait:"  onChange={updateSpecialTrait}/><br/>
            <TextField id="degree" label="Degree:"  onChange={updateDegree}/><br/>
            <TextField id="favLanguage" label="Favorite Language" onChange={updateFavLanguage}/><br/>
            <TextField id="relevantSkills" label="Relevant skills:"  onChange={updateRelevantSkills}/><br/><br/>
          
           <p>Personality Type:<br/>Extrovert 
           <FormControlLabel
                  control={<Switch checked={introvert} onChange={updateIntrovert} name="introvert" />}
                  label="Introvert" /></p>
            <p>Looking for a study group?<br/>No 
            <FormControlLabel
                  control={<Switch checked={studyGroup} onChange={updateStudyGroup} name="studyGroup" />}
                  label="Yes" /></p>
            <Button type="submit" variant="contained">
                Submit
            </Button>
          </form>
        </div>
    );
} 