import jwt from 'jsonwebtoken';

export const isTokenExpired = () => {
  const { exp } = jwt.decode(localStorage.getItem('voomToken'));
  const isExpired = exp < Date.now() / 1000;

  return isExpired;
};


export const isLoggedIn = () =>
  localStorage.voomToken !== undefined && !isTokenExpired();
