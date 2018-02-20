// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import { Route, RouteHandler, Link } from 'react-router';

class Homepage extends React.Component {
    render() {
        return (
            <div>


              <div className="container-initial">
                <div className="container intro">
                  <img src="/images/logo2.png"></img>
                </div>

              </div>
              <section id="hello">
                <div className="container">
                  <div className="row">
                    <div className="sm4">
                        <h2><span className="title">Hello!</span></h2>
                        <h3>I am first a Software Developer</h3>
                        <h3>and ...</h3>
                        <br/>
                    </div>
                  </div>
                </div>
              </section>
              <div className="web-dev-img">
              </div>
              <section id="hello">
                <div className="container">
                  <div className="row">
                    <div className="sm4">
                        <h2><span className="title">there's more!</span></h2>
                        <h3>now a Web Developer. I see myself as a Coding Freak. </h3>
                        <br/>
                        <div className="fancy-button">
                          <div className="left-frills frills"></div>
                          <Link to="/aboutme">
                            <div className="button container">AboutMe</div>
                          </Link>
                          <div className="right-frills frills"></div>
                        </div>
                        <br/>
                    </div>
                  </div>
                </div>
              </section>


            </div>
        )
    }
}

export default Homepage;
