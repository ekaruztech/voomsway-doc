import { ViewModule } from 'views/modules/view-module';

export default {
  title: 'Viewing a Module',
  component: ViewModule,
  url: '/admin/modules/:id/view',
  exact: true,
  requirePermission: true,
};
