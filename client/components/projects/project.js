

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> Geographical Knowledge Based Search </h1>
                  <div className="img-project-desc">
                    <img src="/images/Capture.png" />
                  </div>
                  <h2> GKB </h2>

                  <div className="project-desc">
                    <p className="">
                        A Web based Location search application which searches for places, roads, buildings, etc.
                        This does everything what google does (by integrating google api's), and goes on step further
                        by providing a detailed description with the help of Open Street Map integrated with Wikipedia
                        which makes it easier for users to locate.
                        The website also involves signing up users (also involves facebook, google, twitter login) and
                        also keep track of all the successful searches and the contributions.
                    </p>
                  </div>

                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-6">
                      <dl>
                        <dt>Front-end</dt>
                        <dd>ReactJS with Redux state container, HTML5/CSS3/Bootstrap</dd>
                        <dt>Back-end</dt>
                        <dd>NodeJS with express framework</dd>
                        <dt>Database</dt>
                        <dd>MongoDB</dd>
                        <dt>IaaS/Cloud Computing Services</dt>
                        <dd>Nectar</dd>
                        <dt>External API's</dt>
                        <dd>Google Maps API, Google Place API, Firebase, Nodemailer</dd>
                      </dl>
                    </div>
                    <div className="col-lg-2"></div>
                  </div>
                </div>

                
            </div>
        );
    }
}

export default Project;
