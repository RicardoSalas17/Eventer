import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Navbar from './components/styled-components/Navbar'
import SignupContainer from './components/Signup/SignupContainer'
import LoginContainer from './components/Login/LoginContainer'
import upContainer from './components/Events/EventsContainer';




const Router = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupContainer} />
      <Route exact path="/login"  component={LoginContainer} />
      <Route exact path="/events" component={upContainer} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
