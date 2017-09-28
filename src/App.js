import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Search from './Search.js';
import apiKey from './config.js';
import Cats from './Cats.js';
import Computers from './Computers.js';
import Dogs from './Dogs.js';
import NotFound from './NotFound.js';

const App = () =>{

    return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => (<Search api={apiKey} />)}/>
          <Route path="/cats" render={() => (<Cats api={apiKey} />)} />
          <Route path="/computers" render={() => (<Computers api={apiKey} />)} />
          <Route path="/dogs" render={() => (<Dogs api={apiKey} />)} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }

export default App;
