
var React = require('react');

var Welcome = React.createClass({
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
      secondsElapsed: 60
    }
  },

  resetTimers: function(){
    clearInterval(this.interval);
    this.setState({ secondsElapsed: 60 });
  },

  tick: function(){
    this.setState({ secondsElapsed: this.state.secondsElapsed -1 });
    if (this.state.secondsElapsed <= 0) {
      this.resetTimers();
    }
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
      { this.props.name } { this.state.secondsElapsed }
    </p>

    );
    }
});

module.exports = Welcome;
