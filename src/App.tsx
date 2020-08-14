import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { UpdatePasswordComponent } from './components/UpdatePasswordComponent/UpdatePasswordComponent';

function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/updatePassword' component={UpdatePasswordComponent}/>
      </Router>
    </div>
  );
}

export default App;
