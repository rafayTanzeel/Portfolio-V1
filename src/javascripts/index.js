import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';

import '../views/index.pug';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Rafay</h2>
      </div>
    );
  }
}


const mountNode = document.getElementById('typer');
ReactDOM.render(<App />, mountNode);
