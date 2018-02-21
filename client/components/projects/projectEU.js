

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> Customer Relations/Admin App </h1>
                  <div className="img-project-desc">
                    <img src="http://blog.yondo.com/wp-content/uploads/2017/10/crm.jpg"/>
                  </div>
                  <h2> Energy Umpire </h2>

                  <div className="project-desc">
                    <p className="">
                        This application was desinged to handle all the Energy Umpire's customer information.
                        Entire details of the customers will be stored here (monogDB).
                        This application is internally used by the administrators of the company.
                        This system is also used to send automated emails to customers which consist of electricity/gas savings report.
                        We can also call this system as Automated Reports Generator and Delivery System
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
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="https://github.com/gitpraj/eumpire-report-app" target="_blank">
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
