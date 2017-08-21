import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Rafay</h1>
      </div>
    );
  }
}

const mountNode = window.document.getElementById('app');
ReactDOM.render(<App/>, mountNode);
