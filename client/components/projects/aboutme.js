// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';

class Aboutme extends React.Component {
    render() {
        return (
            <div>
              <div className="aboutme-pic">
                <img src="/images/IMG_4765-min.jpg"></img>
              </div>
              <section className="about" >
                <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <h3>-- I am Prajith Maniyan, first a software developer, now majorly a web developer.</h3>
                    <p>
                      I've always been fascinated by various web applications we have today.
                      The overlap between design and development is the beautiful part in web
                      development. My skills are broad: from front end to back end development.
                      I enjoy each aspect, and love building sites and apps from start to finish.
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-1"></div>
                  <div className="col-sm-12 col-lg-3">
                      <h3>What I do?</h3>
                      <p>Strongest Skills</p>
                      <dl>
                        <dt>Front-end</dt>
                        <dd>HTML, CSS3, Bootstrap, Javascript, jQuery, React, Redux</dd>
                        <dt>Back-end</dt>
                        <dd>NodeJS, Rest APIs, SQL, PostgreSQL, NoSQL</dd>
                        <dt>CMS</dt>
                        <dd>KeystoneJS</dd>
                        <dt>Cloud</dt>
                        <dd>AWS (basic), Firebase (basic)</dd>
                      </dl>
                  </div>
                  <div className="col-sm-12 col-lg-1"></div>
                  <div className="col-sm-12 col-lg-3">
                    <h4>My everyday playlist</h4>
                    <iframe src="https://open.spotify.com/embed/user/spotifycharts/playlist/37i9dQZEVXbJPcfkRz0wJ0" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>
                  </div>
                </div>
              </section>
            </div>
        )
    }
}

export default Aboutme;
