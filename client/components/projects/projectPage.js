
import React from 'react';
import { connect } from 'react-redux';
import projectData from './projects.js'
import Footer from './footer'


class ProjectPage extends React.Component {
    render() {
        // const { login, userLoginSocialRequest } = this.props;
        var items = [];

        for (var i = 0; i < projectData.length; i++) {
          if (i % 2 == 0) {
              items.push(

                <div className="container project-name-left">
                    <h3> {projectData[i].name} </h3>
                    <div className="row">
                        <div className="col-sm-4">
                          <img id="project-img" className="rounded-corners-left" src="http://vrzone.com/wp-content/uploads/2017/04/google_earth_banner.jpg"/>
                        </div>
                        <div className="col-sm-8">
                          <p>
                            {projectData[i].description}
                          </p>
                        </div>
                    </div>
                </div>
              );
            } else {
              items.push(
                <div key={i} className="container project-name-right">
                    <h3> {projectData[i].name} </h3>
                    <div className="row">
                        <div className="col-sm-8">
                          <p>
                            {projectData[i].description}
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <img id="project-img" className="rounded-corners-right" src="http://vrzone.com/wp-content/uploads/2017/04/google_earth_banner.jpg"/>
                        </div>
                    </div>
                </div>
              );
            }
         }

        return (
          <div>
            <div className="project-header">
                <h1>

                    <br></br>
                    <span data-shadow-text="Text-Shadow">PROJECTS</span>
                    <br></br>

                </h1>
            </div>

            <div key={i} className="project">
              {items}
            </div>

            <Footer />
          </div>

        )
    }
}

export default ProjectPage;
