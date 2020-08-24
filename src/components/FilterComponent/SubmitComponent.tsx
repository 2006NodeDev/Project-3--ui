import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        backgroundColor:"#f26926"
      },
    },
  }),
);

export const SubmitComponent:FunctionComponent<any> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">
        Apply Filters
      </Button>
      </div>
  )}