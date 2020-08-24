import React, { FunctionComponent } from 'react'
import { makeStyles, Theme, createStyles, Paper, Typography, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Batch } from '../../models/Batch';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


interface IBatchDisplayProps {
    batch: Batch
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // root: {
        //     display: 'flex',
        //     flexWrap: 'wrap',
        //     '& > *': {
        //         margin: "auto",
        //         marginTop: theme.spacing(5),
        //         width: theme.spacing(60),
        //         height: theme.spacing(40),
        //     },
        // },
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15), //15
            fontWeight: theme.typography.fontWeightRegular,
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
            fontSize: 16
        }
    }),
);

export const BatchDisplayComponent: FunctionComponent<IBatchDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        // <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        BatchId: {props.batch.batchId}  {props.batch.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.typography} variant='h4'>
                        Start Date : {props.batch.startDate}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        End Date : {props.batch.endDate}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        Skill : {props.batch.skill}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        Location : {props.batch.location}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        Type : {props.batch.type}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        Good Grade : {props.batch.goodGrade}
                    </Typography>
                    <Typography className={classes.typography} variant='h4'>
                        Passing Grade : {props.batch.passingGrade}
                    </Typography>
                    {/* <Typography className={classes.typography} variant='h4'>
                    employeeAssignments : {props.batch.employeeAssignments}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    associateAssignments : {props.batch.associateAssignments}
                </Typography>*/}
                    <Typography className={classes.typography} variant='h4'>
                        Current Week : {props.batch.currentWeek}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        // </div>
        // <div className={classes.root}>
        //     <Card>
        //         <CardContent>
        //     <Typography className={classes.typography} variant='h4'>
        //         BatchId: {props.batch.batchId}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Batch Name : {props.batch.name}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Start Date : {props.batch.startDate}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         End Date : {props.batch.endDate}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Skill : {props.batch.skill}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Location : {props.batch.location}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Type : {props.batch.type}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Good Grade : {props.batch.goodGrade}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         Passing Grade : {props.batch.passingGrade}
        //     </Typography>
        //    {/* <Typography className={classes.typography} variant='h4'>
        //         employeeAssignments : {props.batch.employeeAssignments}
        //     </Typography>
        //     <Typography className={classes.typography} variant='h4'>
        //         associateAssignments : {props.batch.associateAssignments}
        //     </Typography>*/}
        //     <Typography className={classes.typography} variant='h4'>
        //         Current Week : {props.batch.currentWeek}
        //     </Typography>
        //         </CardContent>
        //     </Card>
        // </div >
    )
}
