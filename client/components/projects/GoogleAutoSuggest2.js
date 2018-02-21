import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"

const API_KEY = "AIzaSyAUcX2lFXhOwFGiIDJx48ALhfZ2ax1wJ1Q"

class GoogleSuggest extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        search: "",
        value: "",
      }
  }

  handleInputChange(e) {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest(suggest) {
    console.log(suggest)
    this.setState({search: "", value: suggest.formatted_address})
  }

  render() {
    const {search, value} = this.state
    const {googleMaps} = this.props;

    return (
      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: "places,geocode",
        }}
        render={(
            <div>
              <ReactGooglePlacesSuggest
                autocompletionRequest={{input: search}}
                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
                <input
                  type="text"
                  value={value}
                  placeholder="Search a location"
                  onChange={this.handleInputChange.bind(this)}
                />
              </ReactGooglePlacesSuggest>
            </div>
          )
        }
      ></ReactGoogleMapLoader>
    )
  }
}

GoogleSuggest.propTypes = {
  googleMaps: PropTypes.object,
}

export default GoogleSuggest
