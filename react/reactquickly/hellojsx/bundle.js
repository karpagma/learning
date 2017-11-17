'use strict';

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello, ',
        this.props.name
      )
    );
  }
}

ReactDOM.render(React.createElement(HelloWorld, { name: 'madhan' }), document.getElementById('content'));
