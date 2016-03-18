import React from 'react';
import {browserHistory} from 'react-router';

var Accepted = React.createClass({
    componentDidMount: function() {
    setTimeout(function() {
      browserHistory.push('/welcome')}, 10000);
    },
    render: function() {
      return (
          <div className="pass-message">
            <h2>Accepted!</h2>
            <p>You eagerly anticipate all the potatoes you will be eating!</p>
          </div>
      )
    }
  })
  module.exports = Accepted;
