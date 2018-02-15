import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import landingPage from './landingPage'
import loginPage from './login/loginPage'
import SignupPage from './signup/SignupPage'
import createForm from './forms/createForm'
import projectPage from './projects/projectPage2'
import project from './projects/project'

// App component
// <Route path="/" component={landingPage}/>
// <Route path="login" component={loginPage}/>
// <Route path="signup" component={SignupPage}/>
// <Route path="form" component={createForm}/>

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Router history={browserHistory}>

            <Route path="projects" component={projectPage}/>
            <Route path="projects(/:name)" component={project}/>
        </Router>
      </div>
    );
  }
}

export default App;
