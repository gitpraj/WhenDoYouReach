/*
 * LoginPage is the container component for LoginForm
 */
// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        classname: ""
      }
    }

    render() {
        console.log("This is color: " + this.props.color)
        var classnameHeaderline, classnameaTag, classnameHeaderSubtitile;
        if (this.props.color) {
          classnameHeaderline = "header-line" + "-" + this.props.color;
          classnameaTag = "header-title" + "-" + this.props.color + " " + "link--dark link--no-underline";
          classnameHeaderSubtitile = "header-subtitle" + "-" + this.props.color + " " + "color-xs-light-gray";
        } else {
          classnameHeaderline = "header-line";
          classnameaTag = "header-title" + " " + "link--dark link--no-underline";
          classnameHeaderSubtitile = "header-subtitle" + " " + "link--dark link--no-underline color-xs-light-gray";
        }

        console.log("classnameHeaderline: " + classnameHeaderline)
        console.log("classnameaTag: " + classnameaTag)
        console.log("classnameHeaderSubtitile: " + classnameHeaderSubtitile)

        return (
          <div>
            <div className={classnameHeaderline}></div>

            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <header className="header">
                    <div className="header-logo" href="/">
                      <a className={classnameaTag} href="http://www.prajithmaniyan.com/">
                        Prajith Maniyan
                      </a>
                      <p className="color-xs-light-gray">
                        Software Developer
                      </p>
                    </div>

                    <div className="header-right">
                      <a className={classnameHeaderSubtitile} href="mailto:prajithmanian@gmail.com">
                        prajithmanian@gmail.com
                      </a>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

Header.PropTypes = {
    color: React.PropTypes.object.isRequired
}

export default Header;
