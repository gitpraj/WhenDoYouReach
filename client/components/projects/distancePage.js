// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import { Navbar,Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// <div className="row">
//   <div className="col-lg-12 dist-page-header">
//     <button type="button" className="btn btn-lg btn-circle"><i className="glyphicon glyphicon-backward"></i></button>
//   </div>
// </div>

class DistancePage extends React.Component {

    render() {
      console.log("props: " + JSON.stringify(this.props.location))
        return (
            <div>

              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to="/">
                      <a className="dist-header-a">Try again?</a>
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
              </Navbar>


              <div className="distance-page-wrapper">


                <div className="row">
                  <div className="quarter-div-cycle col-lg-6">


                    <img className="img-icon-distance" src="/images/cycle2.jpg"/>
                    <div className="dist-text">
                      <p>
                          {this.props.location.state.cycle.distance == "none" ? <div><h2>Sorry, cycling not possible</h2></div> :
                          <div><span>{this.props.location.state.cycle.distance}</span> in <span>{this.props.location.state.cycle.duration}</span></div>
                          }
                      </p>
                    </div>
                  </div>
                  <div className="quarter-div-car col-lg-6">
                    <img className="img-icon-distance" src="/images/car.jpg"/>
                    <div className="dist-text">
                      <p>
                      {this.props.location.state.car.distance == "none" ? <div><h2>Sorry, driving not possible</h2></div> :
                      <div><span>{this.props.location.state.car.distance}</span> in <span>{this.props.location.state.car.duration}</span></div>
                      }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="quarter-div-train col-lg-6">
                    <img className="img-icon-distance" src="/images/train2.jpg"/>
                    <div className="dist-text">
                      <p>
                      {this.props.location.state.train.distance == "none" ? <div><h2>Sorry, trains don't go to this place</h2></div> :
                      <div><span>{this.props.location.state.train.distance}</span> in <span>{this.props.location.state.train.duration}</span></div>
                      }
                      </p>
                    </div>
                  </div>
                  <div className="quarter-div-walk col-lg-6">
                    <img className="img-icon-distance" src="/images/walk2.jpg"/>
                    <div className="dist-text">
                      <p>
                      {this.props.location.state.walk.distance == "none" ? <div><h2>Sorry, walking not possible</h2></div> :
                      <div><span>{this.props.location.state.walk.distance}</span> in <span>{this.props.location.state.walk.duration}</span></div>
                      }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default DistancePage;
