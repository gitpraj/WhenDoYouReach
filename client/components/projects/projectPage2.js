
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

      this.clickleft = this.clickleft.bind(this);
      this.clickright = this.clickright.bind(this);
      this.mouseOver = this.mouseOver.bind(this);
      this.mouseOverleft = this.mouseOverleft.bind(this);
      this.mouseOut = this.mouseOut.bind(this);
      this.mouseOutleft = this.mouseOutleft.bind(this);
  }

  clickleft(e) {
      // this.setState({ [e.target.name]: e.target.value })
      this.context.router.push('/seven11')
  }

  clickright(e) {
      // this.setState({ [e.target.name]: e.target.value })
      console.log("hello clickright")
      this.context.router.push('/projects/gkb')
  }

  mouseOver(e) {
    // console.log("onMouseOVer reached")
    this.setState({
      imgSrc: "https://i.pinimg.com/originals/40/80/bf/4080bf1fa096fa2b71cb5ba33a6497a3.jpg"
    })
  }

  mouseOut() {
    // console.log("mouseout reached")
    this.setState({
      imgSrc: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420"
    })
  }

  mouseOverleft(e) {
    this.setState({
      imgSrcleft: "http://www.mahkotamedical.com/wp-content/uploads/2016/07/7eleven-1.png"
    })
  }

  mouseOutleft() {
    // console.log("mouseout reached")
    this.setState({
      imgSrcleft: "https://i0.wp.com/www.manilalivewire.com/wp-content/uploads/1365473620_0729.760x498.jpeg?resize=640%2C420"
    })
  }
  // <div className="project-header">
  //     <h1>
  //
  //         <br></br>
  //         <span data-shadow-text="Text-Shadow">PROJECTS</span>
  //         <br></br>
  //
  //     </h1>
  // </div>

    render() {
      const {imgSrc} = this.state
      const {imgSrcleft} = this.state
        return (
          <div>
            <Header />

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
                            onClick={this.clickright} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top" onClick={this.clickright}>
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
                            onClick={this.clickright} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_red" onClick={this.clickright}>
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
                        <img src="https://media.wired.com/photos/59267748f3e2356fd8009556/master/w_840,c_limit/SignalTA.jpg"
                            onClick={this.clickright} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top_blue" onClick={this.clickright}>
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



            <Footer />
          </div>

        )
    }
}

ProjectPage.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default ProjectPage;
