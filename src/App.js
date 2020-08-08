import React from 'react';
import './css/tailwind.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="bg-white h-screen">
        <Route path="/login" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
