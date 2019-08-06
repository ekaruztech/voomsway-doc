import { combineReducers } from 'redux';
import login from 'store/reducers/loginReducer';
import paginatedModules from 'store/reducers/modules';
import allModules from 'store/reducers/allModules';

const appReducer = combineReducers({
  login,
  paginatedModules,
  allModules,
});

const rootReducer = (state, action) => {
  // if (action.type === 'DELETE_CURRENT_USER') {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
