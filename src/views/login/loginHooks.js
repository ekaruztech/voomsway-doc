import { useCallback } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { userLoginRequest, logout } from 'store/actions/login';

export const useLogin = () => {
  const dispatch = useDispatch();
  const loginUser = useCallback(
    (userData,history) => dispatch(userLoginRequest(userData, history)),
    [dispatch]
  );

  const loginData = useSelector(state => state.login );

  const logoutUser = useCallback(
    (history) => dispatch(logout(history)),
    [dispatch]
  );


  return { loginUser, loginData, logoutUser };
};
