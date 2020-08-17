import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
require('dotenv').config()

ReactDOM.render(
    <Auth0Provider
        domain="revature-net.us.auth0.com"
        clientId={process.env['REACT_APP_AUTH0_CLIENT_ID']} //this env var will be the same value as the other, but the name has to start with REACT_APP_
        redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>,
    document.getElementById("root")
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
