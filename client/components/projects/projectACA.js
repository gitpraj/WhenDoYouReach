

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> Australian City Analytics </h1>
                  <div className="img-project-desc">
                    <img src="/images/4-aurin-map.jpg "/>
                  </div>
                  <h2> University of Melbourne </h2>

                  <div className="project-desc">
                    <p className="">
                        The objective was to harvest as many tweets as possible from across the cities of
                        Australia on the NeCTAR Research Cloud and undertake a variety of social media data
                        analytics scenarios that tell interesting stories of life in cities of Australia and
                        importantly how the Twitter data can be used alongside/compared with/augment the data
                        available within the AURIN(Australian Urban research Infrastructure Network) platform
                        to improve our knowledge of life in the cities of Australia. We as a team had to develop
                        Cloud-based solution that exploits a multitude of virtual machines (VMs) across the NeCTAR
                        Research Cloud for harvesting tweets through the Twitter APIs (using both the Streaming and
                        the Search API interfaces) and a front end application for visualising the data sets/scenarios.
                    </p>
                  </div>



                  <ul className="tech-icon-container">
                    <li className="tech-icon-wrapper">
                      <span >HTML/CSS</span>
                      <img className="tech-icon" src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >jQuery</span>
                      <img className="tech-icon" src="http://www.free-icons-download.net/images/jquery-icon-17841.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span>Bootstrap</span>
                      <img className="tech-icon" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38839/preview.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Node.js</span>
                      <img className="tech-icon" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Express</span>
                      <img className="tech-icon" src="http://www.todobackend.com/images/logos/mongodb.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >MongoDB</span>
                      <img className="tech-icon" src="http://www.todobackend.com/images/logos/mongodb.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >AWS</span>
                      <img className="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/AWS_Simple_Icons_AWS_Cloud.svg"/>
                    </li>
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="https://www.youtube.com/watch?v=nsmEvrRzJu8&feature=youtu.be" target="_blank">
                      <li>
                        <span>Demo</span>
                        <i className="fa fa-external-link-square" data-reactid=".0.1.0.0:$0.1.2.1.0.1"></i>
                      </li>
                    </a>
                    <a href="https://github.com/gitpraj/CloudComputing" target="_blank">
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
