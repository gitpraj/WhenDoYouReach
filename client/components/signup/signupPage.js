/*
 * LoginPage is the container component for LoginForm
 */

import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';

class SignupPage extends React.Component {
    render() {
        // const { login, userLoginSocialRequest } = this.props;
        return (
            <div className="container center-login">
                    <div className="col-md-4 login-page-block login-block">
                        <SignupForm />
                    </div>
            </div>
        )
    }
}

// LoginPage.propTypes = {
//     login: React.PropTypes.func.isRequired,
//     userLoginSocialRequest: React.PropTypes.func.isRequired
// }

// export default connect(null, { login , userLoginSocialRequest }) (LoginPage);
export default SignupPage;
