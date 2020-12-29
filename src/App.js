import React from 'react';
import './css/tailwind.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './Login'
import Profile from './Profile';
import Register from './Register';
import GuestRoute from './components/GuestRoute';
import AllSupervisors from './AllSupervisors';

function App() {
  return (
    <Router>
      <div className="h-screen bg-white">
        <GuestRoute path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/allsupervisors" component={AllSupervisors}/>
        <GuestRoute path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
