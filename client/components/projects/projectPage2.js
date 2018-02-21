
import React from 'react';
import { connect } from 'react-redux';
import projectData from './projects.js';
import Footer from './footer';
import Header from './header';

class ProjectPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          imgSrcleft: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420",
          imgSrc: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420"
      }

      this.clickright = this.clickright.bind(this);
      this.clickrightEU = this.clickrightEU.bind(this);
      this.clickrightACA = this.clickrightACA.bind(this);
      this.clickrightSM = this.clickrightSM.bind(this);
      this.clickrightCR = this.clickrightCR.bind(this);
      this.clickrightWH = this.clickrightWH.bind(this);
  }

  clickright(e) {
      this.context.router.push('/projects/gkb')
  }

  clickrightEU(e) {
      this.context.router.push('/projects/eu')
  }

  clickrightACA(e) {
      this.context.router.push('/projects/aca')
  }

  clickrightSM(e) {
      this.context.router.push('/projects/sm')
  }

  clickrightCR(e) {
      this.context.router.push('/projects/cr')
  }

  clickrightWH(e) {
      this.context.router.push('/projects/wh')
  }

    render() {
      const {imgSrc} = this.state
      const {imgSrcleft} = this.state
        return (
          <div>


            <div className="container">
              <div className="row">

                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="https://ak2.picdn.net/shutterstock/videos/3709952/thumb/11.jpg"
                            onClick={this.clickright} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_black" onClick={this.clickright}>
                          <div className="hvrbox-text">Full Stack Web Development. </div>
                          <div className="hvrbox-text-line"> - </div>
                          <div className="hvrbox-text-bottom">with React.js and node.js </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="http://biginja.com/wp-content/uploads/2016/10/MLseries-1.png"
                            onClick={this.clickrightACA} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top" onClick={this.clickrightACA}>
                          <div className="hvrbox-text">Web Development, Twitter Harvesting, Analytics </div>
                          <div className="hvrbox-text-line2"> - </div>
                          <div className="hvrbox-text-bottom">with Html, jQuery, Bootstrap, node.js, tweepy, 1D CNN, Genderizer </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="https://www.eppenbergerdigital.com/wp-content/uploads/2016/12/Eppenberger_Digital_CRM-1.jpg"
                            onClick={this.clickrightEU} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_red" onClick={this.clickrightEU}>
                          <div className="hvrbox-text">Full Stack Web Development. </div>
                          <div className="hvrbox-text-line"> - </div>
                          <div className="hvrbox-text-bottom">with HTML/jquery/javascript/Bootsrap and node.js </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="http://blogs.3ds.com/3dsmobility/wp-content/uploads/sites/13/2016/10/SmartCitiesMobility.jpg"
                            onClick={this.clickrightWH} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_green" onClick={this.clickrightWH}>
                          <div className="hvrbox-text">Full Stack Web Development </div>
                          <div className="hvrbox-text-line"> - </div>
                          <div className="hvrbox-text-bottom">with React.js and node.js</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="https://martechtoday.com/wp-content/uploads/2017/02/network-machine-learning-ss-1920.jpg"
                            onClick={this.clickrightCR} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_darkblue" onClick={this.clickrightCR}>
                          <div className="hvrbox-text">Machine Learning </div>
                          <div className="hvrbox-text-line"> - </div>
                          <div className="hvrbox-text-bottom">with python/scikit </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="float_on_the_right">
                    <div className="landing-page-block landing-block">
                      <div className="hvrbox">
                        <img src="https://media.wired.com/photos/59267748f3e2356fd8009556/master/w_840,c_limit/SignalTA.jpg"
                            onClick={this.clickrightSM} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_blue" onClick={this.clickrightSM}>
                          <div className="hvrbox-text">Java Application Development. </div>
                          <div className="hvrbox-text-line"> - </div>
                          <div className="hvrbox-text-bottom">with Core Java programming </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>




          </div>

        )
    }
}

ProjectPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ProjectPage;
