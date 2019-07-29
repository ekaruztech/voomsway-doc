import AddSection from 'views/modules/add-section';

export default {
  title: 'Add Section',
  component: AddSection,
  url: '/admin/modules/:id/section',
  exact: true,
  requirePermission: true,
};
