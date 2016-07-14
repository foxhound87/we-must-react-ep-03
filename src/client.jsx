import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  handleClick() {
    console.log('Hi!'); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
