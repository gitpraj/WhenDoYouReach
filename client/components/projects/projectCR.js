

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1>Character Recognition from Historic Documents </h1>
                  <div className="img-project-desc">
                    <img src="/images/historical_doc.jpg"/>
                  </div>
                  <h2> University of Melbourne </h2>

                  <div className="project-desc">
                    <p className="">
                        The objective of the project was to develop character classifiers for several historical documents,
                        each produced shortly after the advent of the printing press. These documents were in different languages,
                         use different fonts, and have other idiosyncrasies specific to their author and printer. Project was to
                         identify for a given bitmap image of a character the identity of that character using various machine learning techniques.
                         The accuracy of the classifiers was evaluated using Kaggle in-class competition and were made to compete against other teams.
                    </p>
                  </div>



                  <ul className="tech-icon-container">
                    <li className="tech-icon-wrapper">
                      <span >Python</span>
                      <img className="tech-icon" src="http://iconshow.me/media/images/System/plex-icons/png/Other/256/python.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >scikit</span>
                      <img className="tech-icon" src="http://iconshow.me/media/images/System/plex-icons/png/Other/256/python.png"/>
                    </li>
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="https://github.com/gitpraj/Character-Recognition-from-Historic-Documents" target="_blank">
                      <li>
                        <span>Github</span>
                        <i className="fa fa-external-link-square"></i>
                      </li>
                    </a>
                  </ul>

                </div>


            </div>
        );
    }
}

export default Project;
