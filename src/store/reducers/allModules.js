import { 
  ALL_MODULES_LOADING,
  ALL_MODULES_SUCCESS,
  ALL_MODULES_FAILURE,
} from 'store/actions/allModules';

const initialState = {
  isLoading: false,
  modules: [],
  error: {},
};

export default (state = initialState, action) => {
  switch(action.type) {
    case ALL_MODULES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    
    case ALL_MODULES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        modules: action.modules,
      };

    case ALL_MODULES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: {},
      };

    default:
      return state;
  };
};
