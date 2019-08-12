import API from 'services/api';

export const ALL_MODULES_LOADING = 'ALL_MODULES_LOADING'
export function allModulesLoading() {
  return {
    type: ALL_MODULES_LOADING,
  };
};

export const ALL_MODULES_SUCCESS = 'ALL_MODULES_SUCCESS';
export function allModulesSuccess(modules) {
  return {
    type: ALL_MODULES_SUCCESS,
    modules,
  };
}

export const ALL_MODULES_FAILURE = 'ALL_MODULES_FAILURE';
export function allModulesFailure(error) {
  return {
    type: ALL_MODULES_FAILURE,
    error,
  };
}

export function allModulesRequest() {
  return async (dispatch) => {
    dispatch(allModulesLoading());
    try {
      const modules = await API.get('/modules?all=true');
      const sections = await API.get('/sections?all=true');

      const transformed = modules.data.data.map((module) => {
        let children = sections.data.data.filter(section => {
          return module._id === section.module;
        });

        module.children = children;
        return module;
      });

      dispatch(allModulesSuccess(transformed));
    } catch {

    }
  };
};

