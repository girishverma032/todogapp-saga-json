import './index.css';

import { applyMiddleware, createStore } from 'redux';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import {todoReducer} from './todoReducer'

const sagaMiddleware = createSagaMiddleware();

const store =createStore(todoReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);
