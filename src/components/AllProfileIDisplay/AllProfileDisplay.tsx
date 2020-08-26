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
                {props.profile.firstName} {props.profile.lastName}, AKA {props.profile.nickname}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Uses {props.profile.pronouns} pronouns
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Id number: {props.profile.auth0Id}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Email:  {props.profile.email}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Batch ID: {props.profile.batchId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Hobby: {props.profile.hobbies}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Favorite foods are: {props.profile.favFoods}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    superpower is: {props.profile.specialTrait}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Degree in: {props.profile.degree}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    Favorite coding Language: {props.profile.favLangauge}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                   Is skilled in {props.profile.relevantSkills}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    The statement 'I am an introvert' is: {props.profile.introvert.toString()}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    The statement 'I am looking for a study group' is: {props.profile.studyGroup.toString()}
                </Typography>

            </Paper>
        </div >
    )
}