import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import landingPage from './landingPage'
import loginPage from './login/loginPage'
import SignupPage from './signup/SignupPage'

// App component
class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <Router history={browserHistory}>
            <Route path="/" component={landingPage}/>
            <Route path="login" component={loginPage}/>
            <Route path="signup" component={SignupPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
