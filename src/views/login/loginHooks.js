import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { userLoginRequest } from 'store/actions/login';

export const useLogin = () => {
  const dispatch = useDispatch();
  const loginUser = useCallback(
    userData => dispatch(userLoginRequest(userData)),
    [dispatch]
  );

  return { loginUser };
};
