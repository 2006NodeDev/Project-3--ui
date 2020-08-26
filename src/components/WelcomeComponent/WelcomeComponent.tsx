import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);




export default function WelcomeComponent() {
  return (
    <div>
      <Box pt={5}>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Welcome to Revature!</Typography>
      </ThemeProvider> 
      </Box>
    </div>
  );
}
