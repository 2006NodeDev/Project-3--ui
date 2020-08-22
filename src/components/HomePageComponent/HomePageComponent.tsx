import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import  {Link} from 'react-router-dom';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(20),


    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      textSize: "25",
      backgroundColor: "#F26926"

    }
  })
);

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow(){
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h5>Batch Resources</h5></Paper>

        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}><h5>Employee Resources</h5></Paper>
        </Grid>
      </React.Fragment>
    );
    }


    function FormRow1() {
      return (
        <React.Fragment>
          <Grid item xs={6}>
            <Paper className={classes.paper}><Link to='/currentBatches'>My Batch</Link></Paper>
          </Grid>
  
          <Grid item xs={6}>
           {/*} <Paper className={classes.paper}><Link to='google.com'> colum2 </Link></Paper>*/}
            <Paper className={classes.paper}><a href="https://drive.google.com/file/d/148J-UvJoLLwAmQcH2G_7sHdRig40ymT3/view">Employee Handbook</a></Paper>


          </Grid>
        </React.Fragment>
      );
      }

      
    function FormRow2() {
        return (
          <React.Fragment>
            <Grid item xs={6}>
              <Paper className={classes.paper}><a href="https://slack.com">slack</a></Paper>
            </Grid>
    
            <Grid item xs={6}>
             <Paper className={classes.paper}><a href="https://css-tricks.com">Update Direct Deposits</a></Paper>
  
  
            </Grid>
          </React.Fragment>
        );
        }

        function FormRow3() {
            return (
              <React.Fragment>
                <Grid item xs={6}>
                  <Paper className={classes.paper}><a href="https://git.com">Git Hub</a></Paper>
                </Grid>
        
                <Grid item xs={6}>
                 <Paper className={classes.paper}><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fa%2Frevature.com%2Fopen%3Fid%3D1UDZIFOAv5iZSYV3E1j6BXqTygXpRT3fa&service=wise&hd=revature.com&sacu=1&flowName=GlifWebSignIn&flowEntry=AddSession">Update Direct Deposits</a></Paper>
      
      
                </Grid>
              </React.Fragment>
            );
            }

            function FormRow4() {
                return (
                  <React.Fragment>
                    <Grid item xs={6}>
                      <Paper className={classes.paper}><Link to='/allAssociate'>My Profile</Link></Paper>

                    </Grid>
            
                    <Grid item xs={6}>
                     <Paper className={classes.paper}><a href="https://workforcenow.adp.com/workforcenow/login.html">ADP Login</a></Paper>
          
          
                    </Grid>
                  </React.Fragment>
                );
                }


                function FormRow5() {
                    return (
                      <React.Fragment>
                        <Grid item xs={6}>
                          <Paper className={classes.paper}>Benefits</Paper>
                        </Grid>
                
                        <Grid item xs={6}>
                         <Paper className={classes.paper}><a href="https://css-tricks.com">Ask a Question!</a></Paper>
              
              
                        </Grid>
                      </React.Fragment>
                    );
                    }
        

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow/>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow1/>

          </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2/>

          </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow3/>

          </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow4/>

          </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow5/>
          
        </Grid>
      </Grid>
    </div>
  );
}

