import React from 'react';
import './css/tailwind.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './Login'
import Profile from './Profile';
import Register from './Register';
import GuestRoute from './components/GuestRoute';

function App() {
  return (
    <Router>
      <div className="bg-white h-screen">
        <GuestRoute path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <GuestRoute path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
