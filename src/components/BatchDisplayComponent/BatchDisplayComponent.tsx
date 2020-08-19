import React, { FunctionComponent } from 'react'
import { makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';
import { Batch } from '../../models/Batch';



interface IBatchDisplayProps {
    batch: Batch
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

export const BatchDisplayComponent: FunctionComponent<IBatchDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    email: {props.batch.batchId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    salesforceId : {props.batch.name}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    firstName : {props.batch.startDate}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    lastName : {props.batch.endDate}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.skill}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.location}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.type}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.goodGrade}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.passingGrade}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.employeeAssignments}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.associateAssignments}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.batch.currentWeek}
                </Typography>
            </Paper>
        </div >
    )
}
