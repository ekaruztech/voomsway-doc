import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/reducers';

const composeEnhancers = process.env.NODE_ENV === 'production' 
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
};

export default configureStore;
