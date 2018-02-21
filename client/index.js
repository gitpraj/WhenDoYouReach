import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import jwt from 'jsonwebtoken';
import rootReduce from './reducers/rootReducer';
import HomePage from './components/projects/homepage'
import Layout from './components/projects/layout'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    
  </Route>
);

ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{routes}</Router>, document.getElementById('app'));
