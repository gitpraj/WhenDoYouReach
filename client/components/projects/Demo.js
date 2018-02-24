import React from 'react';
import {geolocated} from 'react-geolocated';
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { browserHistory } from 'react-router'
import axios from 'axios';


// <div className="footer">
//   <div className="footer-container">
//     <span>Made with </span>
//     <img className="tech-icon" src="http://formatjs.io/img/react.svg"/>
//     <span> by </span>
//     <a href="https://github.com/gitpraj" target="_blank">Prajith</a>
//   </div>
// </div>

class Demo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      destAddr: "",
      errors: false
    }
    this.onChange = this.onChange.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onChange(address2) {
      // console.log(address2)
      this.setState({
        destAddr: address2
      });
  }

  onButtonClicked(e) {
      console.log("button clicked")

      console.log("login sends: ", this.state);

      var DemoObj = this;
      axios.post('/api/calcDist', {
        destAddr: this.state.destAddr,
        lat: this.props.coords.latitude,
        longt: this.props.coords.longitude
      })
      .then(function (response) {
        console.log(response.data);

        browserHistory.push({
          pathname: '/dist',
          state: response.data
        })
      })
      .catch(function (error) {
        console.log("error in request");
        DemoObj.setState({
          errors: true
        })
      });
  }

  render() {

    var disableFlag = 0;

    if (this.props.isGeolocationAvailable) {
      if (this.props.isGeolocationEnabled) {
        if (this.props.coords) {
          console.log("finally: " + this.props.coords.latitude);

        } else {
          disableFlag = 1;
        }
      } else {
        disableFlag = 1;
      }
    } else {
      disableFlag = 1;
    }

    const inputProps = {
      value: this.state.destAddr,
      onChange: this.onChange,
      placeholder: 'Where do you wanna go?',
    }

    // <span className="input-group-btn">

    return (
        <div>

          {disableFlag ? <div><h2>Sorry, location has to be enabled.</h2></div> :
            <div className="landing-page">
                <div className="img-icon-div">
                  <img className="img-icon" src="/images/cycle2.jpg"></img>
                </div>
                <div className="landing-search-bar">
                      {this.state.errors && <div className="error-msg"><p>You gotta be kidding. Too far mate!!</p></div>}
                      <PlacesAutocomplete inputProps={inputProps} />

                      <button className="lined thick" onClick={this.onButtonClicked}>How much time?</button>


                </div>


            </div>}

        </div>


    );

  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);
