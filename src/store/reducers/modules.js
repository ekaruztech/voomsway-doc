import { 
  MODULE_CREATION_LOADING,
  MODULE_CREATION_SUCCESS,
  SECTION_CREATION_SUCCESS,
  FETCH_MODULES_SUCCESS,
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
          active: action.moduleData.active,
          id: action.moduleData._id,
          title: action.moduleData.title,
          body: action.moduleData.body,
          createdAt: action.moduleData.createdAt,
          updatedAt: action.moduleData.updatedAt,
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
                  active: action.sectionData.active,
                  id: action.sectionData._id,
                  title: action.sectionData.title,
                  body: action.sectionData.body,
                  module: action.sectionData.module,
                  createdAt: action.sectionData.createdAt,
                  updatedAt: action.sectionData.updatedAt,
                }
              ] 
            }
          }
          return module;
        }),
      };

    case FETCH_MODULES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        modules: [
          ...state.modules,
          ...action.payload
        ]
      }
  
    default:
      return state;
  }
};
