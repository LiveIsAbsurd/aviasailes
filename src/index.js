import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore, createReducer } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app/app';
const initialState = {
  sort: 'price',
  tickets: [],
  filter: ['ALL', '0', '1', '2', '3'],
  allFilters: [
    { label: 'ВСЕ', id: 'ALL' },
    { label: 'БЕЗ ПЕРЕСАДОК', id: '0' },
    { label: '1 ПЕРЕСАДКА', id: '1' },
    { label: '2 ПЕРЕСАДКИ', id: '2' },
    { label: '3 ПЕРЕСАДКИ', id: '3' },
  ],
  loading: true,
  ticketCount: 5,
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

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
    case 'GET_TICKETS':
      return { ...state, loading: false, tickets: [...state.tickets, ...action.value] };
    case 'GET_ID':
      return { ...state, searchID: action.value };
    case 'SHOWE_MORE':
      return { ...state, ticketCount: state.ticketCount + 5 };
    case 'SELECT_SORT':
      return { ...state, sort: action.value };
    default:
      return state;
  }
};

let store = createStore(reducer, enhancer);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
