import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';
import { UpdateRoleComponent } from './components/UpdateRoleComponent/UpdateRoleComponent';
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { User } from '@auth0/auth0-react/dist/auth-state';


function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <NavBarComponent user={null}/>
          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Route path='/updateRole' component={UpdateRoleComponent}/>
          <Route path='/associateInfo' component={AssociateInfoComponent}/>
          <Route path='/login' render={(props) => (<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
