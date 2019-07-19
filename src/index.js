import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt from 'jsonwebtoken';
import configureStore from 'store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getCurrentUser } from 'store/actions/login';


const store = configureStore();
const token = localStorage.voomToken;

const isValidToken = (token) => {
  const { exp } = jwt.decode(token);
  if (Date.now() >= exp * 1000) {
    return false;
  }
  return true;
}

if (token && isValidToken(token)) {
  store.dispatch(getCurrentUser(localStorage.voomToken));
} else if (token && !isValidToken(token)) {
  localStorage.removeItem('voomToken');
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
