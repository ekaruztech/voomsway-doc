import NewModule from 'views/modules/new-module';

export default {
  title: 'Add New Module',
  component: NewModule,
  url: '/admin/new-module',
  exact: true,
  requirePermission: true,
};
