export default (state, action) => {
  switch (action.type) {
    case 'ACTIVE_MODULE_LOADING':
      return {
        ...state,
        isLoading: true,
      };

    case 'ACTIVE_MODULE_SUCCESS':
      return {
        ...state,
        isLoading: false,
        module: {...action.payload},
      }
  
    default:
      return state;
  }
};
