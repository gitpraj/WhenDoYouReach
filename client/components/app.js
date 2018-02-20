import React, { Component } from 'react';
// import { Router, Route, browserHistory } from 'react-router';
import landingPage from './landingPage'
import loginPage from './login/loginPage'
// import SignupPage from './signup/SignupPage'
import createForm from './forms/createForm'
import projectPage from './projects/projectPage2'
import project from './projects/project'
import HomePage from './projects/homepage'
import Layout from './projects/layout'
import { Router, IndexRoute, Route, browserHistory } from 'react-router';


// App component
// <Route path="/" component={landingPage}/>
// <Route path="login" component={loginPage}/>
// <Route path="signup" component={SignupPage}/>
// <Route path="form" component={createForm}/>
// <div className="landing-page">
//   <Router history={browserHistory}>
//       <Route path="/" component={Layout}/>
//       <Route path="projects" component={projectPage}/>
//       <Route path="projects(/:name)" component={project}/>
//   </Router>
// </div>

class App extends Component {
  render() {
    return (


      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage}/>
        <Route path="projects" component={projectPage}/>
        <Route path="projects(/:name)" component={project}/>
    </Route>
    );
  }
}

export default App;
