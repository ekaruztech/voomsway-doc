import { combineReducers } from 'redux';
import test from 'store/reducers/testReducer';

const appReducer = combineReducers({
  test,
});

const rootReducer = (state, action) => {
  if (action.type === 'DELETE_CURRENT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
