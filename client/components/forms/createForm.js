/*
 * User provide authentication information in this component
 */

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
// import Select_Multiple from './formTypes/select.js';
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import axios from 'axios';
import ReactDOMServer from 'react-dom/server';


class CreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            selectedOption: '',
            errors: {},
            name: '',
            questions: [{ name: '' }],
            selectedOption: '',
            selectArray: ['']
        }

        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.handleQuestionChange = this.handleQuestionChange.bind(this);
        // this.handleAddQuestion = this.handleAddQuestion.bind(this);
        // this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    }

    handleQuestionChange(idx, e) {
      const newQuestions = this.state.questions.map((question, sidx) => {
        if (idx !== sidx) return question;
        return { name: e.target.value };
      });

      this.setState({ questions: newQuestions });
    }

    handleAddQuestion() {
      this.setState({
        questions: this.state.questions.concat([{ name: '' }]),
        selectArray: this.state.selectArray.concat([''])
      });
    }

    handleRemoveQuestion(idx) {
      this.setState({
        questions: this.state.questions.filter((s, sidx) => idx !== sidx)
      });
    }

    handleSendingForm() {
      console.log("send form here");
      console.log("questions: " + JSON.stringify(this.state.questions));
      console.log("selectedOption: " + JSON.stringify(this.state.selectArray));
      axios.post('/api/sendform', {
        questions: this.state.questions,
        options: this.state.selectArray
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleChange(idx, selectedOption) {
      // this.setState({ selectedOption });
      // console.log(`Selected: ${selectedOption.label}`);

      // console.log(idx + " " + JSON.stringify(opt));

      const newSelectArray = this.state.selectArray.map((option, sidx) => {
        if (idx !== sidx) return option;
        console.log(selectedOption.value)
        return (selectedOption.value);
      });

      this.setState({ selectArray: newSelectArray });
      console.log("newSelectArray: " + JSON.stringify(newSelectArray))
      console.log("selectArray: " + JSON.stringify(this.state.selectArray))

    }

    render() {

        const { errors } = this.state;
        const { selectedOption } = this.state;
      	const value = selectedOption && selectedOption.value;

        // var value = selectedOption[0];
        return (
            <div className="">

                    <h1 className="h-e-a-d-e-r-t-e-x-t"></h1>
                    <div className="btn-group">
                      <button type="button" onClick={this.handleAddQuestion.bind(this)}>Question</button>
                      <button>Multiple Choice</button>
                    </div>
                    <div className="container">
                    {this.state.questions.map((question, idx) => (
                        //value = selectedOption[0]
                        <div className="shareholder form-group">
                          <input
                            type="text"
                            className="form-control input-w-60 small"
                            placeholder="Question please?"
                            value={question.name}
                            onChange={this.handleQuestionChange.bind(this, idx)}
                          />
                          <button type="button" onClick={this.handleRemoveQuestion.bind(this, idx)} className="remove-button">-</button>

                          <Select
                            name="form-field-name"
                            value={this.state.selectArray[idx]}
                            onChange={this.handleChange.bind(this, idx)}
                            options={[
                              { value: 'satisfied', label: 'Satisfied' },
                              { value: 'unsatisfied', label: 'Unsatisfied' },
                            ]}
                          />

                        </div>

                    ))}

                      <div className="send-btn-form">
                        <button type="button" onClick={this.handleSendingForm.bind(this)} className="btn btn-primary btn-md send-btn-form">Send Form</button>
                      </div>
                    </div>

            </div>
        );
    }
}

// LoginForm.propTypes = {
//     login: React.PropTypes.func.isRequired
// }
//
// LoginForm.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

export default CreateForm;
