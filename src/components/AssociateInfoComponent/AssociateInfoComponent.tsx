<<<<<<< HEAD
import React from 'react'
import { FunctionComponent } from "react";
import { Button } from '@material-ui/core';


export const AssociateInfoComponent:FunctionComponent = (props) => {
return(
    <div>
        <h1>
            {/*Associate Info Goes here!!!*/}
            {/*<Button variant="contained">Default</Button>*/}
            <Button variant="contained" color="primary">
             Associate info
            </Button>
        </h1>
    </div>
)
}

=======
import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//export default function SimpleAccordion() {

  export const AssociateInfoComponent:FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

// import React from 'react'
// import { FunctionComponent } from "react";
// import { Button } from '@material-ui/core';

// export const AssociateInfoComponent:FunctionComponent = (props) => {
// return(
//     <div>
//         <h1>
//             {/*Associate Info Goes here!!!*/}
//             {/*<Button variant="contained">Default</Button>*/}
//             <Button variant="contained" color="primary">
//              Associate info
//             </Button>
//         </h1>
//     </div>
// )
// }
>>>>>>> f952d3f65bc495ccc232c77be1eba453b7c0d6f7
