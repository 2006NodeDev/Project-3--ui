import React, { FunctionComponent, useState, useEffect, SyntheticEvent } from 'react';
import { makeStyles, Container, Grid, Paper, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { Associate } from '../../models/associate';
import clsx from 'clsx';
import { getAllAssociates } from '../../remote/user-service/getAllAssociate';
import { AssociateDisplayComponent } from '../AssociateDisplayComponent/AssociateDisplayComponent';
import { retrieveFilteredResults } from '../../remote/user-service/retrieveFilteredResults';


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

export const AllAssociatesComponent: FunctionComponent<any> = (props) => {

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allAssociate, changeAllAssociate] = useState<Associate[]>([])

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
        const getAssociates = async () => {
            let response = await getAllAssociates()
            console.log(response)

            changeAllAssociate(response)
        }

        if (allAssociate.length === 0) {
            getAssociates()
        }
    })

    const applyFilter = async (e: SyntheticEvent) => {
        e.preventDefault()

        console.log(batchSkill, batchQuarter, batchYear);
        await retrieveFilteredResults(batchSkill, batchQuarter, batchYear)
    }

    let AssociateDisplays = allAssociate.map((associate) => {
        return (
            <div>
                <AssociateDisplayComponent key={'associate-key-' + associate.salesforceId} associate={associate} {...props}/>
                {/* <UpdateRoleComponent key={'associate-key-' + associate.salesforceId} associate={associate} {...props}/> */}
            </div>    
        )
    })

    
    return (
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
          <MenuItem value={'.NET/Microservices'}>.NET with Microservices</MenuItem>
          <MenuItem value={'Java with Automation'}>Java with Automation</MenuItem>
          <MenuItem value={'SalesForce'}>SalesForce</MenuItem>
          <MenuItem value={'Java/Microservices'}>Java with Microservices</MenuItem>
          <MenuItem value={'PEGA'}>Pegasystems</MenuItem>
          <MenuItem value={'Java Devops'}>Java using Devops Practices</MenuItem>
          <MenuItem value={'Java React'}>Java using React</MenuItem>
          <MenuItem value={'Big Data'}>Big Data</MenuItem>
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
          <MenuItem value={'Q1'}>Q1</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}
          <MenuItem value={'Q2'}>Q2</MenuItem>
          <MenuItem value={'Q3'}>Q3</MenuItem>
          <MenuItem value={'Q4'}>Q4</MenuItem> {/*Ask backend group about the best way to format quaters: a date? Just 2020Q1 */}

        </Select>
      </FormControl>
      <Container className={classes.buttonStyle}>
      <Button variant="contained" onClick={applyFilter}>
        Apply Filters
      </Button>
      </Container>
      
    </div>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper className={fixedHeightPaper}>
                            {AssociateDisplays}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}