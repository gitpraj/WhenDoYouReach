import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import jwt from 'jsonwebtoken';
import rootReduce from './reducers/rootReducer';
import App from './components/app.js';
import projectPage from './components/projects/projectPage2'
import project from './components/projects/project'
import projectEU from './components/projects/projectEU'
import projectACA from './components/projects/projectACA'
import projectSM from './components/projects/projectSM'
import projectCR from './components/projects/projectCR'
import HomePage from './components/projects/homepage'
import Layout from './components/projects/layout'
import Aboutme from './components/projects/aboutme'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="aboutme" component={Aboutme}/>
    <Route path="projects">
        <IndexRoute component={projectPage}/>
        <Route path="gkb" component={project}/>
        <Route path="eu" component={projectEU}/>
        <Route path="aca" component={projectACA}/>
        <Route path="sm" component={projectSM}/>
        <Route path="cr" component={projectCR}/>
    </Route>

  </Route>
);

ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{routes}</Router>, document.getElementById('app'));
