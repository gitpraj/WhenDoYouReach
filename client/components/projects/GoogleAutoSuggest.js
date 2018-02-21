/*
 * This component is the search bar, it provides auto suggestions, also search button function.
 * This component imports GoogleMapLoader and GooglePlacesSuggest to implement the core function.
 */

import React, {Component} from "react";
import GoogleMapLoader from "react-google-maps-loader";
import GooglePlacesSuggest from "react-google-places-suggest";
// import "react-google-places-suggest/lib/index.css";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const MY_API_KEY = "AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q"

class MyGoogleSuggest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchStr: "",
            selectedCoordinate: {},
            errors: {}
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSelectSuggest = this.handleSelectSuggest.bind(this);
    }

    handleSearchChange(e) {
        this.setState({searchStr: e.target.value})
    }

    handleSelectSuggest(suggest) {
      console.log("here we are")

    }

    render() {
        const {searchStr} = this.state;
        const {googleMaps} = this.props;

        return (
            <GooglePlacesSuggest
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest}
                search={searchStr}
            >


                <div className="col-lg-6 no-click-through">
                    <div className="input-group search-bar-box">
                        <input
                            type="text"
                            value={searchStr}
                            className="form-control"
                            placeholder="City, State, Country"
                            onChange={this.handleSearchChange}
                        />
                    </div>
                </div>

            </GooglePlacesSuggest>
        )
    }
}

MyGoogleSuggest.propTypes = {
    googleMaps: React.PropTypes.object
}


export default GoogleMapLoader(
    // render={MyGoogleSuggest},
    params={
      libraries: ["places"],
      key: MY_API_KEY
    }
);
