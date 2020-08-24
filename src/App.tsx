import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent'
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
<<<<<<< HEAD
import { AllAssociatesComponent } from './components/AllAssociateComponent/AllAssociateComponent'
import { BatchbyTrainerEmailComponent } from  './components/BatchbyTrainerComponent/BatchbyTrainerEmailComponent';
=======
>>>>>>> f6175259555ad079f8aa3afe04565fd95d65bf44
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
<<<<<<< HEAD
          <Route path='/allAssociate' component={AllAssociatesComponent}/>
          <Route path='/currentBatches' component={CurrentBatchesComponent}/>
          <Route path='/batchInfo' component={BatchbyTrainerEmailComponent} />
          <Route path='/allProfile' component={AllProfileComponent}/>

         

          <Route path='/home'>
          <WelcomeComponent/>
        <HomePageComponent/>
         </Route>

=======
>>>>>>> f6175259555ad079f8aa3afe04565fd95d65bf44
        </Router>
      </Provider>
    </div>
  );
}

export default App;
