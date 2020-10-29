import React from 'react';
import './App.css';
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WorkoutPage from './WorkoutPage';
function App() {
  return (
    <Router>
      <div className="App">
   
        <Route  path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/workout" component={WorkoutPage}/>
      </div>
    </Router>
  );
}

export default App;
