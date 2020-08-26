import React, { FunctionComponent, useState, useEffect, SyntheticEvent } from 'react';
import { makeStyles, Container, Grid, Paper, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import clsx from 'clsx';
import { getAllProfile } from '../../remote/profile-service/getAllProfile';
import { ProfileDisplayComponent } from '../AllProfileIDisplay/AllProfileDisplay';
import { Profile } from '../../models/Profile';
import { retrieveFilteredProfileResults } from '../../remote/profile-service/retrieveFilteredProfileResults';
import { Associate } from '../../models/Associate';
import { profile } from 'console';

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
    buttonStyle: {
        '& > *': {
          margin: theme.spacing(1),
          backgroundColor:"#f26926",
          textColor:"black"
        },
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
}));

export const AllProfileComponent: FunctionComponent<any> = (props) => {
    console.log(props.Profile)
    let [allAssociate, changeAllAssociate] = useState<Associate[]>([])
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allProfile, changeAllProfile] = useState<Profile[]>([])
    const [batchQuarter, setBatchQuarter] = React.useState('');
    const [batchSkill, setBatchSkill] = React.useState('');
    const [batchYear, setBatchYear] = React.useState('')

  const handleSkillChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatchSkill(event.target.value as string);
  };

  const handleQuarterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatchQuarter(event.target.value as string);
  };
  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatchYear(event.target.value as string);
  };

    useEffect(() => {
        const getProfile = async () => {
            let response = await getAllProfile()
            console.log(response)

            changeAllProfile(response)
        }

        if (props.Profile === undefined ) {
            getProfile()
        }
    })
    const applyFilter = async (e: SyntheticEvent) => {
        e.preventDefault()
  
        let filteredResults = await retrieveFilteredProfileResults(batchSkill, batchQuarter, batchYear)
        changeAllAssociate(filteredResults)
    }

    let ProfileDisplays = allProfile.map((profile) => {
        return <ProfileDisplayComponent key={'profile-key-' + profile.auth0Id} profile={profile} />
    })
    if(props.Profile !== undefined){
      ProfileDisplays = props.Profile.map((profile: Profile) => <ProfileDisplayComponent key={'profile-key-' + profile.auth0Id} profile={profile} />)
    }
    return (
      (props.Profile)?
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
        :
        <div>
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="skill-selector-label">Tech</InputLabel>
        <Select
          labelId="skill-selector-label"
          id="skill-selector"
          value={batchSkill}
          onChange={handleSkillChange}
        >
          <MenuItem value={'.NET%2FMicroservices'}>.NET with Microservices</MenuItem>
          <MenuItem value={'Java with Automation'}>Java with Automation</MenuItem>
          <MenuItem value={'SalesForce'}>SalesForce</MenuItem>
          <MenuItem value={'Java%2FMicroservices'}>Java with Microservices</MenuItem>
          <MenuItem value={'PEGA'}>Pegasystems</MenuItem>
          <MenuItem value={'Java%20Devops'}>Java using Devops Practices</MenuItem>
          <MenuItem value={'Java%20React'}>Java using React</MenuItem>
          <MenuItem value={'Big%20Data'}>Big Data</MenuItem>
          <MenuItem value={''}>No Filter</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="year-selector-label">Year</InputLabel>
        <Select
          labelId="year-selector-label"
          id="year-selector"
          value={batchYear}
          onChange={handleYearChange}
        >
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2019'}>2019</MenuItem>
          <MenuItem value={'2018'}>2018</MenuItem>
          <MenuItem value={'2017'}>2017</MenuItem>
          <MenuItem value={'2016'}>2016</MenuItem>
          <MenuItem value={''}>No Filter</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="quarter-selector-label">Quarter</InputLabel>
        <Select
          labelId="quarter-selector-label"
          id="quarter-selector"
          value={batchQuarter}
          onChange={handleQuarterChange}
        >
          <MenuItem value={'1'}>Q1</MenuItem> 
          <MenuItem value={'2'}>Q2</MenuItem>
          <MenuItem value={'3'}>Q3</MenuItem>
          <MenuItem value={'4'}>Q4</MenuItem>
          <MenuItem value={''}>No Filter</MenuItem>

        </Select>
      </FormControl>
      <Container className={classes.buttonStyle}>
      <Button variant="contained" onClick={applyFilter}>
        Apply Filters
      </Button>
      </Container>
      
    </div>
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
    </div>
    )
}