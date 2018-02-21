

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> Secured Multi-Server Activity Stream </h1>
                  <div className="img-project-desc">
                    <img src="/images/cropped-network2.jpg"/>
                  </div>
                  <h2> University of Melbourne </h2>

                  <div className="project-desc">
                    <p className="">
                        The objective of the project was to create a multi-server system to broadcast activity
                        objects between a number of clients in the system. The multi-server system will load balance
                         client requests over the servers, using a redirection mechanism to ask clients to reconnect
                          to another server. It will also allow clients to register a username and a secret, that can
                           act as an authentication mechanism. Clients can login and logout as either anonymous or using
                           a username/secret pair. Clients are allowed to broadcast an activity object to all other clients connected at the time.
                    </p>
                  </div>



                  <ul className="tech-icon-container">
                    <li className="tech-icon-wrapper">
                      <span >Core Java</span>
                      <img className="tech-icon" src="https://image.flaticon.com/icons/svg/226/226777.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Unix</span>
                      <img className="tech-icon" src="https://cdn.pixabay.com/photo/2017/01/31/15/33/linux-2025130_960_720.png"/>
                    </li>
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="https://github.com/gitpraj/Secured-Multi-Server-Activity-Stream" target="_blank">
                      <li>
                        <span>Github</span>
                        <i className="fa fa-external-link-square" data-reactid=".0.1.0.0:$0.1.2.1.0.1"></i>
                      </li>
                    </a>
                  </ul>

                </div>


            </div>
        );
    }
}

export default Project;
