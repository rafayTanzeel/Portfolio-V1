import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';
import '../views/index.pug';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Rafay</h1>
      </div>
    );
  }
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
