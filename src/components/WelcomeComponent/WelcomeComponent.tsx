import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);




export default function WelcomeComponent() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h1">Welcome to Revature!</Typography>
      </ThemeProvider> 
    </div>
  );
}
