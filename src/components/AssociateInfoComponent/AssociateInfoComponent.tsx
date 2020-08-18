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

