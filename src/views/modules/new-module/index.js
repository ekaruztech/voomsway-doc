import React from 'react';
import { withRouter } from 'react-router-dom';
import ModuleForm from 'components/module-form';
import { useModule } from 'views/modules/moduleHooks';

const NewModule = ({ title, history, ...props }) => {
  const { createModule, editModule, modules } = useModule();
  const editPageId = props.match.params.id;
  const module = modules.find(module => module._id === editPageId)

  const handleModuleSubmit = (title, body) => {
    if(module) {
      // we are editing!!
      const editedModule = {
        title, body
      };
      editModule({ editedModule }, editPageId, history);
    } else {
      const mainModule = {
        title,
        body,
      };
      createModule({ mainModule }, history);
    }
  }

  return (
    <ModuleForm
      title={editPageId ? 'Edit Module' : 'Add New Module'}
      submitChange={handleModuleSubmit}
      editPageId={editPageId}
    />
  );
};

export default withRouter(NewModule);
