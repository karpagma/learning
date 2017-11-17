'use strict';

class HelloWorld extends React.Component {
  render() {
    const h1 = React.createElement('h1', null, `Hello, ${this.props.name}`);
    return React.createElement('div', null, h1, h1);
  }
}

const helloWorld = React.createElement(HelloWorld, {name: 'madhan'});

ReactDOM.render(helloWorld, document.getElementById('content'));
