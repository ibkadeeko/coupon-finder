import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './app';
import './assets/styles/styles.scss';
import configureStore from './store';

const store = configureStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  appRoot,
);
