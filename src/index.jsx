import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { tickLife } from './actions';
import reducer, { STATUS_START } from './reducer';
import logger from 'redux-logger';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
let start = null;
function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  const gameState = store.getState().status;
  if (gameState === STATUS_START) {
    store.dispatch(tickLife());
  }
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
