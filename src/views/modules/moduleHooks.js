import { useCallback } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { createModuleRequest } from 'store/actions/modules';

export const useModule = () => {
  const dispatch = useDispatch();
  const createModule = useCallback(
    (payload, history) => dispatch(createModuleRequest(payload, history)),
    [dispatch]
  );

  const modules = useSelector(state => state.allModules.modules);

  return { createModule, modules };
};
