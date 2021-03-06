import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  // handleFormSubmit(event) {,
  //   event.preventDefault()
  //
  //   geocodeByAddress(this.state.address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => console.log('Success', latLng))
  //     .catch(error => console.error('Error', error))
  // }

  onChange(address2) {
      // console.log(address2)
      this.setState({
        address: address2
      });
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      placeholder: 'Where do you wanna go?',
    }

    return (

        <PlacesAutocomplete inputProps={inputProps} />
    )
  }
}

export default SimpleForm
