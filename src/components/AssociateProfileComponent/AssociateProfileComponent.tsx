import { FunctionComponent, useState } from "react";
import { FormControl, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@material-ui/core';
import React from "react";

export const AssociateProfileComponent:FunctionComponent<any> = (props) => {
    const [pronouns, changePronouns] = useState('')
    const [hobbies, changeHobbies] = useState('')
    const [favFoods, changeFavFoods] = useState('')
    const [specialTrait, changeSpecialTrait] = useState('')
    const [degree, changeDegree] = useState('')
    const [favLanguage, changeFavLanguage] = useState('')
    const [relavantSkills, changeRelaventSkills] = useState('')
    const [introvert, changeIntrovert] = useState('')
    const [studyGroups, changeStudyGroups] = useState('')

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
        changeRelaventSkills(event.currentTarget.value)
    }
    const updateIntrovert = (event: any) => {
        event.preventDefault()
        changeIntrovert(event.currentTarget.value)
    }
    const updateStudyGroups = (event: any) => {
        event.preventDefault()
        changeStudyGroups(event.currentTarget.value)
    }
    return(
        <div>
            <TextField id="pronouns" label="Preferred Pronouns:" onChange={updatePronouns} /><br/>
            <TextField id="hobby" label="Hobby:" onChange={updateHobbies} /><br/>
            <TextField id="favFoods" label="Favorite Foods: "  onChange={updateFavFoods}/><br/>
            <TextField id="specialTrait" label="Special Trait: "  onChange={updateSpecialTrait}/><br/>
            <TextField id="degree" label="Degree: "  onChange={updateDegree}/><br/>
            <TextField id="favLanguage" label="Favorite Language" onChange={updateFavLanguage}/><br/>
            <TextField id="relavantSkills" label="Relavant Skills: "  onChange={updateRelevantSkills}/><br/><br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Personality Type:</FormLabel>
                <RadioGroup aria-label="introvert" name="introvert" onChange={updateIntrovert}>
                    <FormControlLabel value="true" control={<Radio />} label="Introvert" />
                    <FormControlLabel value="false" control={<Radio />} label="Extrovert" />
                </RadioGroup>
            </FormControl><br/><br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Looking for a Study Group:</FormLabel>
                <RadioGroup aria-label="studyGroup" name="studyGroup" onChange={updateStudyGroups}>
                    <FormControlLabel value="true" control={<Radio />} label="True" />
                    <FormControlLabel value="false" control={<Radio />} label="False" />
                </RadioGroup>
            </FormControl><br/>
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </div>
    );
} 