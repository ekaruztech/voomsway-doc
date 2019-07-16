import { 
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
} from 'store/actions/login';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  switch(action.type) {
    case USER_LOGIN_LOADING:
        return {
          ...state,
          isLoading: true
        };
    
        case USER_LOGIN_SUCCESS:
          return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.user,
          };

    case USER_LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: { key: action.error.message, details: { ...action.error.messages } },
        };
    
    default:
        return state;
  };
};
