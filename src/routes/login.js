import LoginForm from 'views/login';

export default {
  title: 'Login',
  component: LoginForm,
  url: '/admin/login',
  exact: true,
  requirePermission: false,
};
