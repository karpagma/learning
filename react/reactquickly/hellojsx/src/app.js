'use strict';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld name="madhan" />,
  document.getElementById('content')
);
