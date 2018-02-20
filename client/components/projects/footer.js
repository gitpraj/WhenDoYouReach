/*
 * LoginPage is the container component for LoginForm
 */
// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';

class FooterDiv extends React.Component {
    render() {
        return (
          <footer className="footer">
             <div className="social-area">
              <ul>
                  <li>
                    <a href="https://www.facebook.com/praj.man90" target="_blank" title="Join me on Facebook" className="shr-btn-facebook">

                      <i className="fa fa-facebook-official fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/gitpraj" target="_blank" title="Check out my Github profile" className="shr-btn-instagram">
                      <i className="fa fa-github fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/prajith-maniyan-03291273/" target="_blank" title="Join me on Linkedin" className="shr-btn-behance">
                      <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/prajithm2790/" target="_blank" title="Join me on Instagram" className="shr-btn-soundcloud">
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="credits">
                <p className="footer-name">Prajith Maniyan </p>
                <p><a className="email" href="mailto:prajithmanian@gmail.com">prajithmanian@gmail.com</a></p>
                <img className="slice-footer" src="./footer-logo.png"/>
              </div>
              <div className="copyright-footer">
                <p>Copyright Prajith Maniyan ©2017 -- Made with <span><a className="" href="https://reactjs.org/" target="_blank">React</a></span> </p>
              </div>
          </footer>
        )
    }
}

export default FooterDiv;
