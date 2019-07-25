import { 
  MODULE_CREATION_LOADING,
  MODULE_CREATION_SUCCESS,
  SECTION_CREATION_SUCCESS,
} from 'store/actions/modules';

const initialState = {
  isLoading: false,
  modules: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODULE_CREATION_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case MODULE_CREATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        modules: [...state.modules, {
          id: action.moduleData._id,
          title: action.moduleData.title,
          body: action.moduleData.body,
          sections: []
        }]
      };

    case SECTION_CREATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        modules: state.modules.map(module => {
          if (module.id === action.sectionData.module) {
            return {
              ...module,
              sections:[
                ...module.sections,
                {
                  id: action.sectionData._id,
                  title: action.sectionData.title,
                  body: action.sectionData.body
                }
              ] 
            }
          }
          return module;
        }),
      };
  
    default:
      return state;
  }
};
