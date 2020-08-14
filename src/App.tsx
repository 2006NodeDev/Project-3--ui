import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';
import { Auth0LoginComponent } from './components/Auth0LoginComponent/Auth0LoginComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <h1>Project is Running...</h1>
          <Route path='/updatePassword' component={UpdatePasswordComponent}/>
          <Auth0LoginComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
