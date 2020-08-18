import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Auth0LogoutComponent } from '../Auth0LogoutComponent/Auth0LogoutComponent';
import { Auth0LoginComponent } from "../Auth0LoginComponent/Auth0LoginComponent";

export const NavComponent = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
        (isAuthenticated) ? 
        <div>
            <Auth0LogoutComponent /> 
        </div>
        : 
        <div>
            <Auth0LoginComponent />
        </div>
    );
  };