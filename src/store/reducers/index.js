import { combineReducers } from 'redux';
import login from 'store/reducers/loginReducer';
import modules from 'store/reducers/modules';

const appReducer = combineReducers({
  login,
  allModules: modules,
});

const rootReducer = (state, action) => {
  if (action.type === 'DELETE_CURRENT_USER') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
