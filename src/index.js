import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore, createReducer } from '@reduxjs/toolkit';
import { createStore } from 'redux';

import App from './components/app/app';
const initialState = {
  filter: [],
  allFilters: [
    { label: 'ВСЕ', id: 'ALL' },
    { label: 'БЕЗ ПЕРЕСАДОК', id: '0' },
    { label: '1 ПЕРЕСАДКА', id: '1' },
    { label: '2 ПЕРЕСАДКИ', id: '2' },
    { label: '3 ПЕРЕСАДКИ', id: '3' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER': {
      let newArr;
      if (state.filter.includes(action.value)) {
        if (state.filter.includes('ALL') && action.value !== 'ALL') {
          newArr = { ...state, filter: [...state.filter.filter((el) => el !== 'ALL' && el !== action.value)] };
        } else if (action.value === 'ALL') {
          newArr = { ...state, filter: [] };
        } else {
          newArr = { ...state, filter: [...state.filter.filter((el) => el !== action.value)] };
        }
      } else {
        if (action.value === 'ALL') {
          const arr = state.allFilters.map((el) => el.id);
          newArr = { ...state, filter: arr };
        } else {
          newArr = { ...state, filter: [...state.filter, action.value] };
        }
      }

      if (newArr.filter.length === state.allFilters.length - 1 && !newArr.filter.includes('ALL')) {
        newArr = { ...newArr, filter: [...newArr.filter, 'ALL'] };
      }

      return newArr;
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
