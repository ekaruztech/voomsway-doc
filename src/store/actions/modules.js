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
  const { mainModule, subSection } = payload;
  return (dispatch) => {
    dispatch(moduleCreationLoading());

    return API.post('/modules', mainModule)
      .then(
        (response) => { 
          const { _id, title, body } = response.data.data;

          dispatch(moduleCreationSuccess({ _id, title, body }));

          if (subSection.title && subSection.body) {
            dispatch(createSectionRequest({ ...subSection, module: _id }));
            history.push('/admin');
          } else {
            history.push('/admin');
          }
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

export function createSectionRequest(payload) {
  return (dispatch) => {
    // dispatch(sectionCreationLoading());

    return API.post('/sections', payload)
      .then(
        (response) => { 
          const { _id, title, body, module } = response.data.data;

          dispatch(sectionCreationSuccess({ _id, title, body, module }))
        },

	      (error) => {
          const { message, messages } = error.response.data._meta.error;
          // dispatch(sectionCreationFailure({ message, messages }))
        }
      )
  }
}