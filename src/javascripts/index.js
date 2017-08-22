import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';
import '../views/index.pug';
import './render.js';

import Typist from 'react-typist';


class App extends React.Component {
  render() {
    return (
      <Typist startDelay='200' className="typer">
        Welcome to my Portfolio...<br/><br/>
        My name is Rafay Tanzeel<br/><br/>
        I am a Software Engineer
      </Typist>
    );
  }
}

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
