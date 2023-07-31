import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import UserProfile from './pages/UserProfile/UserProfile';
import './App.css';

function App() {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categories" component={Category} />
            <Route path="/profile" component={UserProfile} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
