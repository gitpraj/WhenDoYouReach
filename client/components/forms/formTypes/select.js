import React from 'react';
import Select from 'react-select';

class Select_Multiple extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedOption: ''
      }
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
  	const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange.bind(this)}
        options={[
          { value: 'one', label: 'Satisfied' },
          { value: 'two', label: 'Unsatisfied' },
        ]}
      />
    );
  }
}

export default Select_Multiple;
