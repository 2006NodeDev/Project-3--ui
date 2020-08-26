import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { getAllProfile } from '../../remote/profile-service/getAllProfile';
import { ProfileDisplayComponent } from '../AllProfileIDisplay/AllProfileDisplay';
import { Profile } from '../../models/Profile';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(5),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    fixedHeight: {
        height: 600,
    },
}));

export const AllProfileComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allProfile, changeAllProfile] = useState<Profile[]>([])


    useEffect(() => {
        const getProfile = async () => {
            let response = await getAllProfile()
            console.log(response)

            changeAllProfile(response)
        }

        if (allProfile.length === 0) {
            getProfile()
        }
    })

    let ProfileDisplays = allProfile.map((profile) => {
        return <ProfileDisplayComponent key={'profile-key-' + profile.auth0Id} profile={profile} />
    })
    
    return (
        <div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {ProfileDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}