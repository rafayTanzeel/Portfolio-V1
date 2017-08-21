import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';
import '../index.pug';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Rafay</h1>
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App/>, document.getElementById('app'));
