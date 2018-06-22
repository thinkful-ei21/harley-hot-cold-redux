import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import store from './store';



import Game from './components/game';
import * as actions from './actions/actions';



store.dispatch(actions.addGuess(5));
store.dispatch(actions.setFeedback('here\'s the new feedback'));
store.dispatch(actions.resetGame());

console.log(store.getState())

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
