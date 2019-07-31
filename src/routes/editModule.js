import NewModule from 'views/modules/new-module';

export default {
  title: 'Edit Module',
  component: NewModule,
  url: '/admin/modules/:id/edit',
  exact: true,
  requirePermission: true,
};
