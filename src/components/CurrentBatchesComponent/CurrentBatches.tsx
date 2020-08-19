import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Container, Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import { getCurrentBatches } from '../../remote/Caliber-api/getCurrentBatches';
import { Batch } from '../../models/Batch';
import { batch } from 'react-redux';
import { BatchDisplayComponent } from '../BatchDisplayComponent/BatchDisplayComponent';


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


export const CurrentBatchesComponent:FunctionComponent = (props) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    let [currentBatch, changeCurrentBatch] = useState<Batch[]>([])

    useEffect(() => {
        const getAssociates = async () => {
            let response = await getCurrentBatches()
            console.log(response)
            changeCurrentBatch(response)
        }

        if (currentBatch.length === 0) {
            getCurrentBatches()
        }
    })

    let BatchDisplays = currentBatch.map((batch) => {
            return <BatchDisplayComponent key={'batch-key-' + batch.batchId} batch={batch} />
        })
        
        return (
            <div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper className={fixedHeightPaper}>
                                {BatchDisplays}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }