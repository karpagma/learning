'use strict';

class Note extends React.Component {
  confirmLeave(e) {
    let confirmationMessage = 'Do you really want to close?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  componentDidMount() {
    console.log('attaching beforeunload event');
    window.addEventListener('beforeunload', this.confirmLeave);
  }

  componentWillUnmount() {
    console.log('removing confirmation message');
    //window.removeEventListener('beforeunload', this.confirm);
  }

  render() {
    console.log('render');
    return <h1>Note</h1>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showComp: true
    };
    this.comp = <Note />;

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
