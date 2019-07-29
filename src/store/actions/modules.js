import API from 'services/api';

export const MODULE_CREATION_LOADING = 'MODULE_CREATION_LOADING'
export function moduleCreationLoading() {
  return {
    type: MODULE_CREATION_LOADING
  };
};

export const MODULE_CREATION_SUCCESS = 'MODULE_CREATION_SUCCESS';
export function moduleCreationSuccess(moduleData) {
  return {
    type: MODULE_CREATION_SUCCESS,
    moduleData
  };
}

export const MODULE_CREATION_FAILURE = 'MODULE_CREATION_FAILURE';
export function moduleCreationFailure(error) {
  return {
    type: MODULE_CREATION_FAILURE,
    error
  };
}

export function createModuleRequest(payload, history) {
  const { mainModule } = payload;
  return (dispatch) => {
    dispatch(moduleCreationLoading());

    return API.post('/modules', mainModule)
      .then(
        (response) => { 
          const { active, _id, title, body, createdAt, updatedAt } = response.data.data;

          dispatch(moduleCreationSuccess({ active, _id, title, body, createdAt, updatedAt }));
          history.push('/admin');
        },

	      (error) => {
          const { message, messages } = error.response.data._meta.error;
          dispatch(moduleCreationFailure({ message, messages }))
        }
      );
  }
}

export const SECTION_CREATION_SUCCESS = 'SECTION_CREATION_SUCCESS';
export function sectionCreationSuccess(sectionData) {
  return {
    type: SECTION_CREATION_SUCCESS,
    sectionData
  };
}

export function createSectionRequest(payload, history) {
  const { subSection } = payload;

  return (dispatch) => {
    // dispatch(sectionCreationLoading());

    return API.post('/sections', subSection)
      .then(
        (response) => { 
          const { active, _id, title, body, module, createdAt, updatedAt } = response.data.data;

          dispatch(sectionCreationSuccess({ active, _id, title, body, module, createdAt, updatedAt }))
          history.push('/admin');
        },

	      (error) => {
          const { message, messages } = error.response.data._meta.error;
          // dispatch(sectionCreationFailure({ message, messages }))
        }
      )
  }
}

export const FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS';
export function fetchModules() {
  return (dispatch) => {
    return API.get('/modules')
    .then(
      (response) => { 
        const payload = response.data.data;
        dispatch({
          type: FETCH_MODULES_SUCCESS,
          payload,
        })
      }
    )
  }
}
