import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent'
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';
import { CurrentBatchesComponent } from './components/CurrentBatchesComponent/CurrentBatches';
import HomePageComponent from './components/HomePageComponent/HomePageComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent'
import { AllProfileComponent } from './components/AllProfileComponent/AllProfileComponent'
import MenubarComponent from './components/MenuBarComponent/MenubarComponent'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>

        <Redirect to='/home' />

        

        <NavBarComponent user={null}/>

          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Route path='/associateInfo' component={AssociateInfoComponent}/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
