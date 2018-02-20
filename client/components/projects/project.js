

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';


// <div className="row">
//   <div className="col-lg-4"></div>
//   <div className="col-lg-6">
//     <dl>
//       <dt>Front-end</dt>
//       <dd>ReactJS with Redux state container, HTML5/CSS3/Bootstrap</dd>
//       <dt>Back-end</dt>
//       <dd>NodeJS with express framework</dd>
//       <dt>Database</dt>
//       <dd>MongoDB</dd>
//       <dt>IaaS/Cloud Computing Services</dt>
//       <dd>Nectar</dd>
//       <dt>External API's</dt>
//       <dd>Google Maps API, Google Place API, Firebase, Nodemailer</dd>
//     </dl>
//   </div>
//   <div className="col-lg-2"></div>
// </div>


class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> Geographical Knowledge Based Search </h1>
                  <div className="img-project-desc">
                    <img src="/images/Capture.png"/>
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



                  <ul className="tech-icon-container">
                    <li className="tech-icon-wrapper">
                      <span >React.js</span>
                      <img className="tech-icon" src="http://formatjs.io/img/react.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Node.js</span>
                      <img className="tech-icon" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Redux</span>
                      <img className="tech-icon" src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >MongoDB</span>
                      <img className="tech-icon" src="http://www.todobackend.com/images/logos/mongodb.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span>Webpack</span>
                      <img className="tech-icon" src="https://cdn-images-1.medium.com/max/271/0*QWJsNmIu81bhqgds.png"/>
                    </li>
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="http://115.146.90.170/" target="_blank">
                      <li>
                        <span>View project</span>
                        <i className="fa fa-external-link-square"></i>
                      </li>
                    </a>
                    <a href="https://github.com/gitpraj/GKB_website_2.0" target="_blank">
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
