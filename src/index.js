import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, createReducer } from '@reduxjs/toolkit';
import App from './components/app/app';

const inState = {
    filter: 'ALL'
}

const filterReducer = (state = inState.filter, action) => {
    switch (action.type) {
        case 'SWITCH_FILTER':
            return 'ALL';
        default:
            return state;
    }
};

const rootReducer = createReducer({
    filter: filterReducer
});

let store = configureStore({
    reducer: rootReducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store.getState()}>
    <App />
  </Provider>
);
