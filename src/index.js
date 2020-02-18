import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import RootReducer from './reducers/rootReducer';

// Create store with Middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <App />
  </Provider>, document.getElementById('root'));
