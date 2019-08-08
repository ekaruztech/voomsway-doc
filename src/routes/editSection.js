import NewSection from 'views/modules/add-section';

export default {
  title: 'Edit Module',
  component: NewSection,
  url: '/admin/sections/:id/edit',
  exact: true,
  requirePermission: true,
};
