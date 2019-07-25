import { combineReducers } from 'redux';
import login from 'store/reducers/loginReducer';
import module from 'store/reducers/moduleReducer';

const appReducer = combineReducers({
  login,
  allModules: module,
});

const rootReducer = (state, action) => {
  if (action.type === 'DELETE_CURRENT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
