import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';
import { AssociateInfoComponent } from './components/AssociateInfoComponent/AssociateInfoComponent';
import { AllAssociatesComponent } from './components/AllAssociateComponent/AllAssociateComponent'
import { NavBarComponent } from './components/NavbarComponent/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
        <NavBarComponent user={null}/>
          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Route path='/associateInfo' component={AssociateInfoComponent}/>
          <Route path='/allAssociate' component={AllAssociatesComponent}/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
