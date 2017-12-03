import React from 'react';

// Install React Router and set up your and components.

import { BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import './App.css';
import Search from './Search.js';

// Get a Flickr API key

import apiKey from './config.js';
import Cats from './Cats.js';
import Computers from './Computers.js';
import Dogs from './Dogs.js';
import NotFound from './NotFound.js';

const App = () =>{

    return (
      <Router basename={'/flickr'} history={ HashRouter }>
      <div className="container">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/` } render={() => (<Search api={apiKey} />)}/>
          <Route path={`${process.env.PUBLIC_URL}/cats`} render={() => (<Cats api={apiKey} />)} />
          <Route path={`${process.env.PUBLIC_URL}/computers`} render={() => (<Computers api={apiKey} />)} />
          <Route path={`${process.env.PUBLIC_URL}/dogs`} render={() => (<Dogs api={apiKey} />)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    );
  }

export default App;
