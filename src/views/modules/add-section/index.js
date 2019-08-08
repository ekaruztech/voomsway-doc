import React from 'react';
import { withRouter } from 'react-router-dom';
import ModuleForm from 'components/module-form';
import { useModule } from 'views/modules/moduleHooks';

const AddSection = ({ title, history, ...props  }) => {
  const { createSubSection, editSection } = useModule();
  const editSectionId = props.location.state.sectionId;
  const { sectionTitle, sectionBody } = props.location.state;

  const handleSectionSubmit = (subTitle, value) => {
    if(sectionTitle || sectionBody) {
      console.log('editing')
      const editedSection = {
        title: subTitle,
        body: value,
      };
      editSection({ editedSection }, editSectionId, history);
    } else{
      const subSection = {
        title: subTitle,
        body: value,
        module: props.match.params.id
      };
      createSubSection({ subSection }, history);
    } 
  }

  return (
    <>
    <ModuleForm
      type='Section'
      title={editSectionId ? 'Edit Section' : 'Add New Section'}
      submitChange={handleSectionSubmit}
      editPageId={editSectionId}
      sectionTitle={sectionTitle}
      sectionBody={sectionBody}
    />
    </>
    );
};

export default withRouter(AddSection);
