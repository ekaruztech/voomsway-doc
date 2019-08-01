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

	      (error) => {}
      )
  }
}

export const EDIT_MODULE_SUCCESS = 'EDIT_MODULE_SUCCESS';
export function editModuleRequest(payload, id, history) {
  const { editedModule } = payload;

  return (dispatch) => {

    return API.put(`/modules/${id}`, editedModule)
      .then(
        (response) => { 
          const { active, _id, title, body, module, createdAt, updatedAt } = response.data.data;

          dispatch({
            type: EDIT_MODULE_SUCCESS,
            payload: { active, _id, title, body, module, createdAt, updatedAt }
          })
          history.push('/admin');
        },

	      (error) => {}
      )
  }
}

export const FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS';
export function fetchModules(perPage, page) {
  return (dispatch) => {
     dispatch({
       type: 'MODULES_LOADING'
     });
    return API.get(`/modules?per_page=${perPage}&page=${page}`)
    .then(
      (response) => {
        const payload = {
          modules: response.data.data,
          pagination: response.data._meta.pagination
        };
        dispatch({
          type: FETCH_MODULES_SUCCESS,
          payload,
        })
      }
    )
  }
}
