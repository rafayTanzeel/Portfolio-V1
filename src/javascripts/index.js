import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/index.scss';
import '../styles/scrollArrow.scss';

import '../views/index.pug';
import './render.js';

import Typist from 'react-typist';
// import './fullpage';


class App extends React.Component {
  render() {
    const cursor = {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: true,
      hideWhenDoneDelay: 500,
    };
    return (
      <Typist startDelay={200} className="typer" cursor={cursor} avgTypingDelay={100} stdTypingDelay={50}>
        Welcome to my Portfolio...<br/><br/>
        My name is Rafay Tanzeel<br/><br/>
        I am a Software Engineer
      </Typist>
    );
  }
}


const mountNode = document.getElementById('typer');
ReactDOM.render(<App />, mountNode);
