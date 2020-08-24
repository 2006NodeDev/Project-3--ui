import React from 'react'
import { FunctionComponent } from "react";
import { makeStyles, Theme, createStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      alignItems: 'screenLeft'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const SkillFilterComponent:FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const [batchSkill, setBatchSkill] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatchSkill(event.target.value as string);
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tech</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={batchSkill}
          onChange={handleChange}
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
    </div>
  );
}