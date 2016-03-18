import React from 'react';

var Timer = React.createClass({
  getInitialState: function(){
    return {
      secondsElapsed: 60
    }
  },

  resetTimers: function(){
    clearInterval(this.interval);
    this.setState({ secondsElapsed: 0 });
  },

  tick: function(){
    this.setState({ secondsElapsed: this.state.secondsElapsed -1 });
    if (this.state.secondsElapsed <= 0) {
      this.resetTimers()
    }
  },

  start: function(){
    // this.setState(this.getInitialState());
    if (!this.interval) {
      this.interval = setInterval(this.tick, 1000);
    }
  },

  componentWillReceiveProps: function(props) {
    if(props.start === true) {
      this.start();
    }
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function(){
    return (
    <p>
      { this.props.name } { this.state.secondsElapsed }

    </p>

    );
    }
});

module.exports = Timer;
