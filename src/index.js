import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore, createReducer } from '@reduxjs/toolkit';
import { createStore } from 'redux';

import App from './components/app/app';
const reducer = (state = 0, actions) => {
  switch (actions.type) {
    case 'INC': {
      console.log('true');
      return state + 1;
    }
    default:
      return state;
  }
};

let store = createStore(reducer);
store.dispatch({ type: 'INC' });
console.log(store.getState());

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
