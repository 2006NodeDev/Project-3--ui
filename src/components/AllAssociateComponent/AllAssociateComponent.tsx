import React, { FunctionComponent, useState, useEffect } from 'react';
import { makeStyles, Container, Grid, Paper, Card, CardMedia } from '@material-ui/core';
import { Associate } from '../../models/associate'
import clsx from 'clsx';
import { getAllAssociates } from '../../remote/Caliber-api/getAllAssociate';
import { AssociateDisplayComponent } from '../AssociateDisplayComponent/AssociateDisplayComponent'

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

export const AllAssociatesComponent: FunctionComponent<any> = (props) => {
<<<<<<< HEAD
    console.log("next line should show allAssoicate")
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    let [allAssociate, changeAllAssociate] = useState<Associate[]>([])
    
    console.log(allAssociate)
=======

    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    let [allAssociate, changeAllAssociate] = useState<Associate[]>([])
>>>>>>> f952d3f65bc495ccc232c77be1eba453b7c0d6f7

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

    let AssociateDisplays = allAssociate.map((associate) => {
        return <AssociateDisplayComponent key={'associate-key-' + associate.salesforceId} associate={associate} />
    })
    
    return (
        <div>
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