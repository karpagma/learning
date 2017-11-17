'use strict';

class Mouse extends React.Component {
  constructor() {
    super();
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleMouseOver(event) {
    console.log('mouseover event handler');
    console.log(event.target);
    setTimeout(() => {
      //console.table(event.target);
      //console.log(event.target);
      console.log(event);
    }, 3000);
  }

  render() {
    return React.createElement(
      'div',
      {
        style: { border: '1px solid red' },
        onMouseOver: this.handleMouseOver
      },
      'Open DevTools and move your mouse cursor over here'
    );
  }
}

ReactDOM.render(React.createElement(Mouse, null), document.getElementById('content'));
