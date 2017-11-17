'use strict';

const AnalogDisplay = props => {
  const date = new Date(props.time);
  const secondsHandAngle = (date.getSeconds() / 60 * 360 - 90).toString();
  const minutesHandAngle = (date.getMinutes() / 60 * 360 - 90).toString();
  const hoursHandAngle = (date.getHours() / 12 * 360 - 90).toString();

  const dialStyle = {
    position: 'relative',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderStyle: 'solid',
    borderColor: 'black'
  };

  const secondsHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid, red',
    width: '40%',
    height: 1,
    transform: `rotate(${secondsHandAngle}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'red'
  };

  const minutesHandStyle = {
    position: 'relative',
    top: 100,
    left: 100,
    border: '1px solid grey',
    width: '40%',
    height: 3,
    transform: `rotate(${minutesHandAngle}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };

  const hoursHandStyle = {
    position: 'relative',
    top: 92,
    left: 106,
    border: '1px solid grey',
    width: '20%',
    height: 3,
    transform: `rotate(${hoursHandAngle}deg)`,
    transformOrigin: '0% 0%',
    backgroundColor: 'grey'
  };

  return React.createElement(
    'div',
    { style: dialStyle },
    React.createElement('div', { style: secondsHandStyle }),
    React.createElement('div', { style: minutesHandStyle }),
    React.createElement('div', { style: hoursHandStyle })
  );
};

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleString()
    };

    setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    return React.createElement(AnalogDisplay, { time: this.state.currentTime });
  }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById('content'));
