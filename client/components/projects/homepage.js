// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import GoogleAutoSuggest from './GoogleAutoSuggest3.js'

class Homepage extends React.Component {
    render() {
        return (
            <div>
              <div className="landing-page">
                    <div className="landing-search-bar input-group">
                        <GoogleAutoSuggest />
                        <span className="input-group-btn">
                          <button className="lined thick">How much time?</button>
                        </span>
                    </div>

                    <div className="footer">
                      <div className="footer-container">
                        <span>Made with </span>
                        <img className="tech-icon" src="http://formatjs.io/img/react.svg"/>
                      </div>
                    </div>
                </div>

              </div>
        )
    }
}

export default Homepage;
