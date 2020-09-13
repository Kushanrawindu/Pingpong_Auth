import React from 'react';
import './css/tailwind.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './Login'
import Profile from './Profile';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="bg-white h-screen">
        <Route path="/login" component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/register" component={Register}/>
      </div>
    </Router>
  );
}

export default App;
