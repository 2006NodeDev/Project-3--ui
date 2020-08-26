import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { CardHeader } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  header:{
    background:"#F26926"

  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function HomeComp() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
        <Container>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome to Associate Companion
            </Typography>
        </Container>
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Associate Companion is a way for Revature Associates 
              to connect with their fellow batchmates and share useful information 
              with one another.
            </Typography>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        
                        title={<Typography gutterBottom variant="h5" component="h2">
                        RevaturePro
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        This is a link to the revature pro dashboard where you can see information about your curriculum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://app.revature.com/dashboard'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        title={<Typography gutterBottom variant="h5" component="h2">
                        Benefits
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        View your employee benefits information.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://sites.google.com/a/revature.com/portal/benefits'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        title={<Typography gutterBottom variant="h5" component="h2">
                        Timesheets
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        Record and Submit your timesheet information.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://rev2.force.com/revature/s/login/?ec=302&startURL=%2Frevature%2Fs%2F'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        title={<Typography gutterBottom variant="h5" component="h2">
                        Handbook
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        View the Revature Employee Handbook to find all information about being a Revature employee.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://drive.google.com/file/d/148J-UvJoLLwAmQcH2G_7sHdRig40ymT3/view'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        title={<Typography gutterBottom variant="h5" component="h2">
                        Employee Portal
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        Access your Revature Employee Portal
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://rev2.force.com/revature/s/login/?ec=302&startURL=%2Frevature%2Fs%2F'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <CardHeader className={classes.header}
                        title={<Typography gutterBottom variant="h5" component="h2">
                        ADP
                        </Typography>}
                    >
                    </CardHeader>
                    <Typography>
                        Visit ADP to mange your employee information regarding direct deposit, 401K, etc.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <a href='https://workforcenow.adp.com/workforcenow/login.html'>
                    <Button size="small" color="primary">
                    Go
                    </Button>
                  </a>
                  </CardActions>
                </Card>
              </Grid>
         
            
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}