import { combineReducers } from 'redux';
import login from 'store/reducers/loginReducer';

const appReducer = combineReducers({
  login,
});

const rootReducer = (state, action) => {
  if (action.type === 'DELETE_CURRENT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
