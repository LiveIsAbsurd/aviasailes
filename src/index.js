import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore, createReducer } from '@reduxjs/toolkit';
import { createStore } from 'redux';

import App from './components/app/app';
const reducer = (state = { filter: [] }, action) => {
  switch (action.type) {
    case 'FILTER': {
      if (action.value === 'ALL' && !state.filter.includes(action.value)) {
        return { filter: [action.value] };
      }
      if (state.filter.includes(action.value)) {
        return { filter: state.filter.filter((item) => item !== action.value && item !== 'ALL') };
      } else {
        return { filter: [...state.filter, action.value] };
      }
    }
    default:
      return state;
  }
};

let store = createStore(reducer);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
