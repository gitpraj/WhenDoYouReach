/*
 * LoginPage is the container component for LoginForm
 */

import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';



// <Image src="http://www.enliveningedge.org/wp-content/uploads/2016/06/FI-maybe-Rainbow-Colors-Abstract-Wallpapers.jpg" />
// ParallaxProvider>
//
//
//   <Parallax
//       className="custom-class"
//       offsetYMax={20}
//       offsetYMin={-20}
//       slowerScrollRate
//       tag="figure"
//   >
//   <div className="container bgimg">
//       div with background
//   </div>
//
//   <div className="container bgimg">
//       div with background
//   </div>
//
//   <div className="container bgimg">
//       div with background
//   </div>
//   </Parallax>
//
// </ParallaxProvider>


class SignupPage extends React.Component {
    render() {
        // const { login, userLoginSocialRequest } = this.props;
        return (
          <div className="">
            <div className="container center-login">
                    <div className="col-md-4 login-page-block login-block">
                        <SignupForm />
                    </div>

            </div>
            <div className="parallax">
                <div className="container">
                    PARALLAX EFFECT
                </div>
            </div>
            <div className="dummy">
                <div className="container">
                    DIV below parallax
                </div>
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
