import React from 'react';
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
// var React = require('react');

var currentQuestion = {
  1: {
    question: 'Is Mars in the Milky Way Galaxy?',
    answer: 'yes'
  },
  2: {
    question: 'Has water been discovered on Mars?',
    answer: 'yes'
  },
  3: {
    question: 'Do you really, really want to go to Mars? Seriously?',
    answer: 'yes'
  },
  4: {
    question: '',
    answer: ''
  },
};

var Question = React.createClass({

  getInitialState: function() {
    return {
      start: false,
      currentQuestion: 1,
      correctAnswer: 0,
    };
  },

  hidden: function(notHidden) {
  if(this.state.start !== notHidden) {
    return "hidden";
  } else {
    return "";
  }
},

  startTest: function() {
    this.setState({ start: true })
  },

  generateQuestions: function() {
    return (<span>{currentQuestion[this.state.currentQuestion].question}</span>);
  },

  formSubmit: function(event) {
    event.preventDefault();
    this.setState({currentQuestion: this.state.currentQuestion + 1});
    if (this.refs.userAnswer.value === currentQuestion[this.state.currentQuestion].answer) {
      this.setState({correctAnswer: this.state.correctAnswer + 1})
    };
    this.refs.userAnswer.value="";
  },

  testResults: function () {
    if (this.state.correctAnswer === 3) {
      browserHistory.push('/accepted');
    } else {
      browserHistory.push('/rejected');
    }
  },

  componentDidUpdate: function() {
    if(this.state.currentQuestion > 3){
      this.setState({start: false});
      this.testResults();
    };
  },

  componentWillReceiveProps: function(){
    if(status.timerStatus === 0){
      browserHistory.push('/rejected');
    };
  },

  render: function() {
    return (
      <div className="wrapper">
        <header>
          <h1> MARS </h1>
          <div className="rocket">
            <i className="fa fa-space-shuttle"></i>
          </div>
        </header>
        <div className="test-area">
          <div className= {"clock " + this.hidden(true)}>
            <div className="clock-text">
              <p>
              </p>
            </div>
              <Timer start={this.state.start}/>
          </div>
          <div className="test-button">
            <button type="button" className={"eval-start " + this.hidden(false)} onClick={this.startTest}>Begin Evaluation</button>
          </div>
          <div className={"question-pane " + this.hidden(true)}>
              <form>
              <p>{this.generateQuestions()}</p>
              <input className="input-answer" ref="userAnswer" type="text" placeholder="Enter Answer"></input>
              <button type="button" onClick = {this.formSubmit}>Submit Answer</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Question;
