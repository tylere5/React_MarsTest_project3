import { Router, Route, browserHistory, Redirect } from 'react-router';


var React = require('react');


var Question = React.createClass({
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
          <div className="clock">
            <div className="clock-text">
              <p>
                <span>1</span>
                <span>:</span>
                <span>00</span>
              </p>
            </div>
            <Timer/>
          </div>
          <div className="test-button">
            <button>Take Test</button>
          </div>
        </div>
      </div>
    )
  }
});

var Timer = React.createClass({
  getInitialState: function(){
    return {
      secondsElapsed: 0
    }
  },

  resetTimers: function(){
    clearInterval(this.interval);
    this.setState({ secondsElapsed: 0 });
    this.start();
  },

  tick: function(){
    this.setState({ secondsElapsed: this.state.secondsElapsed +1 });
  },

  start: function(){
    this.interval = setInterval(this.tick, 1000);
  },

  componentDidMount: function(){
    setTimeout(this.start, this.props.timeout);
  },

  render: function(){
    return (
    <p>
      { this.props.name } has { this.state.secondsElapsed }s elapsed
    </p>

    );
    }
});



module.exports = Question;
