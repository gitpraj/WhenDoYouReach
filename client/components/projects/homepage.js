// Copyright Prajith Maniyan ©2017
import React from 'react'
import { connect } from 'react-redux';
import { Route, RouteHandler, Link } from 'react-router';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { browserHistory } from 'react-router'
import axios from 'axios';
// import GoogleAutoSuggest from './GoogleAutoSuggest3.js'

class Homepage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      address: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onChange(address2) {
      // console.log(address2)
      this.setState({
        address: address2
      });
  }

  onButtonClicked(e) {
      console.log("button clicked")

      console.log("login sends: ", this.state);

      axios.post('/api/calcDist', {
        address: this.state.address
      })
      .then(function (response) {
        console.log(response.data);

        browserHistory.push({
          pathname: '/dist',
          name: "abc",
          state: response.data

        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Where do you wanna go?',
    }

    return (
        <div>
          <div className="landing-page">
                <img className="img-icon" src="/images/cycle2.jpg"></img>
                <div className="landing-search-bar input-group">
                    <PlacesAutocomplete inputProps={inputProps} />
                    <span className="input-group-btn">
                      <button className="lined thick" onClick={this.onButtonClicked}>How much time?</button>
                    </span>
                </div>

                <div className="footer">
                  <div className="footer-container">
                    <span>Made with </span>
                    <img className="tech-icon" src="http://formatjs.io/img/react.svg"/>
                    <span> by </span>
                    <a href="https://github.com/gitpraj" target="_blank">Prajith</a>
                  </div>
                </div>
            </div>

          </div>
    )
  }
}

export default Homepage;
