import React from 'react';
import {browserHistory} from 'react-router';

var Rejected = React.createClass({
    componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 10000);
    },
    render: function() {
      return (
          <div className="reject-message">
            <h2>Rejected!</h2>
          </div>
      )
    }
  })
  module.exports = Rejected;
