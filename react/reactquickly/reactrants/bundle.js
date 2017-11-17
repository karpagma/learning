'use strict';

class Comp extends React.Component {
  constructor() {
    super();
    console.log('in constructor');
  }

  componentWillMount() {
    console.log('in componentWillMount');
  }

  componentWillUnmount() {
    console.log('in componentWillUnmount');
  }

  render() {
    console.log('in render');
    return React.createElement(
      'h1',
      null,
      'Hello'
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showComp: true
    };
    this.comp = React.createElement(Comp, null);

    this.onShowClicked = this.onShowClicked.bind(this);
  }

  onShowClicked(evt) {
    evt.stopPropagation();
    this.setState({
      showComp: !this.state.showComp
    });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.onShowClicked },
        'Toggle'
      ),
      this.state.showComp ? this.comp : null
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
