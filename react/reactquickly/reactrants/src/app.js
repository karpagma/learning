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
    return <h1>Hello</h1>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showComp: true
    };
    this.comp = <Comp />;

    this.onShowClicked = this.onShowClicked.bind(this);
  }

  onShowClicked(evt) {
    evt.stopPropagation();
    this.setState({
      showComp: !this.state.showComp
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onShowClicked}>Toggle</button>
        {this.state.showComp ? this.comp : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
