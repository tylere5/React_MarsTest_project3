import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Question from './components/question-page.jsx';
import Welcome from './components/welcome.jsx';
import NotFound from './components/404.jsx';

var App = React.createClass({
  render: function() {
    return (
      <Router history={ browserHistory } >
        <Redirect from='/' to='/welcome' />
        <Route path='/welcome' component={Welcome} />
        <Route path='/mars-test' component={Question} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});





ReactDOM.render(<App />, document.querySelector('#mount-node'));
