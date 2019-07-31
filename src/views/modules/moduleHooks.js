import { useCallback, useEffect, useReducer } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { createModuleRequest, createSectionRequest } from 'store/actions/modules';
import API from 'services/api';
import activeModuleReducer from 'store/reducers/activeModule';


export const useModule = () => {
  const dispatch = useDispatch();

  const createModule = useCallback(
    (payload, history) => dispatch(createModuleRequest(payload, history)),
    [dispatch]
  );

  const modules = useSelector(state => state.allModules.modules);

  const createSubSection = useCallback(
    (payload, history) => dispatch(createSectionRequest(payload, history)),
    [dispatch]
  );

  return { createModule, modules, createSubSection };
};


export const useActiveModule = (id) => {
  const [state, dispatch] = useReducer(activeModuleReducer, {
    isLoading: false,
    module: {},
  });

  useEffect(() => {
    const getActiveModule = async () => {
      dispatch({ type: 'ACTIVE_MODULE_LOADING' });

      try {
        const moduleResponse = await API.get(`/modules/${id}`);
        const sectionsResponse = await API.get(`/sections?module=${id}`);

        const payload = { 
          ...moduleResponse.data.data,
          sections: [...sectionsResponse.data.data],
        }
        dispatch({ type: 'ACTIVE_MODULE_SUCCESS', payload });
      } catch (error) {
        console.log(error)
      }    
    };

    getActiveModule();
  }, []);

  return [state];
}
