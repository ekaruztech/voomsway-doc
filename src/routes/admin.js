import AdminDashboard from 'views/admin-dashboard';

export default {
  title: 'Admin',
  component: AdminDashboard,
  url: '/admin',
  exact: true,
  requirePermission: true,
};
