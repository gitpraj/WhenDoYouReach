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
import HomePage from './components/projects/homepage'
import Layout from './components/projects/layout'
import Aboutme from './components/projects/aboutme'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// const store = createStore(
//     rootReduce,
//     compose(
//         applyMiddleware(thunk),
//         window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
// )

// <Provider store={store}>

// render(
//     <Provider>
//         <landingPage />
//     </Provider>
//     , document.getElementById('app')
// );
// <Route path="projects(/:name)" component={project}/>

// render(
//         <App />
//     , document.getElementById('app')
// );

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage}/>
    <Route path="aboutme" component={Aboutme}/>
    <Route path="projects">
        <IndexRoute component={projectPage}/>
        <Route path="gkb" component={project}/>
    </Route>

  </Route>
);

ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>{routes}</Router>, document.getElementById('app'));
