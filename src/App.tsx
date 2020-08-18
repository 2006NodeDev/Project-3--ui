import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';
import { UpdateRoleComponent } from './components/UpdateRoleComponent/UpdateRoleComponent';
import { Auth0Component } from './components/Auth0Component/Auth0Component';
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <NavBarComponent user={null}/>
          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Route path='/updateRole' component={UpdateRoleComponent}/>
          <Auth0Component/>
          <Route path='/associateInfo' component={AssociateInfoComponent}/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
