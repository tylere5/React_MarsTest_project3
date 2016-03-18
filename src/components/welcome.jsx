import React from 'react';
import {browserHistory} from 'react-router';


var Welcome = React.createClass({

  takeQuiz: function(){
    return this.props.history.push('/mars-test')
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
          <div className="test-button">
            <button onClick={this.takeQuiz}>Take Test</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Welcome;
