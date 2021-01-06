// importing react and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// importing functions from react-redux and redux libraries.
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// importing application style
import '../assets/stylesheets/application.scss';

// importing the reducers: the flats reducer and the selected flat reducer
import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';
// importing the app itself.
import App from './components/app';

// this combines the multiple reducers we have using a combineReducers function
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// this selects the root id and renders on that id a redux store wrapped around the app.
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>,
    root
  );
}
