import NewModule from 'views/new-module';

export default {
  title: 'Document New Module',
  component: NewModule,
  url: '/admin/new-module',
  exact: true,
  requirePermission: true,
};
