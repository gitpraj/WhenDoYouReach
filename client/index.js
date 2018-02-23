import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import jwt from 'jsonwebtoken';
import rootReduce from './reducers/rootReducer';
import HomePage from './components/projects/homepage'
import DistancePage from './components/projects/distancePage'
import Demo from './components/projects/Demo'
import Layout from './components/projects/layout'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Demo}/>
    <Route path="dist" component={DistancePage}/>
    <Route path="demo" component={Demo}/>
  </Route>
);

ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{routes}</Router>, document.getElementById('app'));
