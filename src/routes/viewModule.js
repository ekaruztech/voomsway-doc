import ViewModule from 'views/modules/view-module';

export default {
  title: 'Viewing a Module',
  component: ViewModule,
  url: '/admin/modules/:id',
  exact: true,
  requirePermission: true,
};
