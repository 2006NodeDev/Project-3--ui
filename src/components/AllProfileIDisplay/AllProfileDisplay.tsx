import React, { FunctionComponent } from 'react'
import { makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';
import { Profile } from '../../models/Profile';



interface IProfileDisplayProps {
    profile: Profile
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: "auto",
                marginTop: theme.spacing(5),
                width: theme.spacing(60),
                height: theme.spacing(40),
            },
        },
        paper: {
            backgroundColor: '#E0E0E0',
            padding: theme.spacing(1),
            overflow: 'auto',
        },
        typography: {
            color: 'black',
            padding: theme.spacing(1),
            fontFamily: 'monospace',
            fontSize: 18
        }
    }),
);

export const ProfileDisplayComponent: FunctionComponent<IProfileDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    auth0Id: {props.profile.auth0Id}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                firstName : {props.profile.firstName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    lastName : {props.profile.lastName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    batchId : {props.profile.batchId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    nickname : {props.profile.nickname}
                </Typography>

                <Typography className={classes.typography} variant='h4'>
                    pronouns : {props.profile.pronouns}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    hobbies : {props.profile.hobbies}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    favFoods : {props.profile.favFoods}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    specialTrait : {props.profile.specialTrait}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    degree : {props.profile.degree}
                </Typography>

                <Typography className={classes.typography} variant='h4'>
                    favLanguage : {props.profile.favLangauge}
                </Typography>

                <Typography className={classes.typography} variant='h4'>
                    relaventSkills : {props.profile.relevantSkills}
                </Typography>


                <Typography className={classes.typography} variant='h4'>
                    introvert : {props.profile.introvert}
                </Typography>


                
                <Typography className={classes.typography} variant='h4'>
                    studyGroup : {props.profile.studyGroup}
                </Typography>



            </Paper>
        </div >
    )
}