


var React = require('react');


var NotFound = React.createClass({
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

module.exports = NotFound;
