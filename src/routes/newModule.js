import NewModule from 'views/modules/new-module';

export default {
  title: 'Document New Module',
  component: NewModule,
  url: '/admin/new-module',
  exact: true,
  requirePermission: true,
};
