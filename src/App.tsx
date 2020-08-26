import React, { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent'
import { UpdateRoleComponent } from './components/UpdateRoleComponent/UpdateRoleComponent';
import { AllAssociatesComponent } from './components/AllAssociateComponent/AllAssociateComponent'
import { BatchbyTrainerEmailComponent } from './components/BatchbyTrainerComponent/BatchbyTrainerEmailComponent';
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';
import { LoginComponent } from './components/LoginComponent/LoginComponent';
import { User } from '@auth0/auth0-react/dist/auth-state';
import { NewUserComponent } from './components/Auth0SignUpComponent/Auth0SignupComponent';
import { CurrentBatchesComponent } from './components/CurrentBatchesComponent/CurrentBatches';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent'
import { AllProfileComponent } from './components/AllProfileComponent/AllProfileComponent'
import { LogoutComponent } from './components/LogoutComponent/LogoutComponent';
import { GetRoleComponent } from './components/GetRoleComponent/GetRoleComponent';
import { ToastContainer } from 'react-toastify';
import {AssociatebyTrainerComponent } from './components/AssociatebyTrainerComponent/AssociatebyTrainerComponent';
import { AssociateProfileComponent } from './components/AssociateProfileComponent/AssociateProfileComponent';

function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)

  return (
    <div className="App">
      <Provider store={store}>
        <Router>

          <Redirect to='/home' />

          <NavBarComponent user={currentUser} />
          <Route path='/updatePassword' component={UpdatePasswordComponent} />
          <Route path='/editProfile' component={AssociateProfileComponent}/>
          <Route path='/updateRole' component={UpdateRoleComponent} />
          <Route path='/login' render={(props) => (<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
          <Route path='/register' component={NewUserComponent} />
          <Route path='/allAssociate' component={AllAssociatesComponent} />
          <Route path='/currentBatches' component={CurrentBatchesComponent} />
          <Route path='/batchInfo' component={BatchbyTrainerEmailComponent} />
          <Route path='/allProfile' component={AllProfileComponent} />
          <Route path='/profileInfo/:trainerEmail' component={AssociatebyTrainerComponent} />

          <Route path='/home'>
            <WelcomeComponent />
            <HomePageComponent />
          </Route>
          <Route path='/logout' render={(props) => (<LogoutComponent changeCurrentUser={changeCurrentUser} user={currentUser} {...props} />)} />
          <Route path='/getRole' component={GetRoleComponent} />
        </Router>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </Provider>
    </div>
  );
}

export default App;
