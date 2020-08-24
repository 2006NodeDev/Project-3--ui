import React, { FunctionComponent } from 'react'
import { makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';
import { Associate } from '../../models/Associate';



interface IAssociateDisplayProps {
    associate: Associate
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

export const AssociateDisplayComponent: FunctionComponent<IAssociateDisplayProps> = (props) => {
    let classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={4}>
                <Typography className={classes.typography} variant='h4'>
                    email: {props.associate.email}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    salesforceId : {props.associate.salesforceId}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    firstName : {props.associate.firstName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    lastName : {props.associate.lastName}
                </Typography>
                <Typography className={classes.typography} variant='h4'>
                    flag : {props.associate.flag}
                </Typography>
            </Paper>
        </div >
    )
}