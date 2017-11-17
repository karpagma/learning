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
    return React.createElement(
      'h1',
      null,
      'Note'
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showComp: true
    };
    this.comp = React.createElement(Note, null);

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
