import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';

import usersReducer from './store/reducers/usersReducer';

const store = createStore(usersReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
