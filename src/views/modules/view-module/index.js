import React, { useState, createContext } from 'react';
import { useActiveModule } from 'views/modules/moduleHooks';
import Sidebar from 'components/admin-sidebar';
import ModuleContent from 'components/admin-content/moduleContent';


const ActiveModuleContext = createContext();

const ViewModule = (props) => {
  const [state] = useActiveModule(props.match.params.id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const linkState = props.location.state;

  const handleContentChange = (title, content) => {
    setTitle(title);
    setContent(content)
  };


  if (state.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ActiveModuleContext.Provider value={{
      module: state.module,
      sections: state.module.sections,
    }}>
      <div className='module-parent'>
        <Sidebar changeContent={handleContentChange} />

        <ModuleContent 
          title={title}
          content={content}
          contentType={linkState && linkState.type}
          moduleId={linkState && linkState.moduleId}
          sectionTitle={linkState && linkState.sectionTitle}
          sectionBody={linkState && linkState.sectionBody}
        />
      </div>
    </ActiveModuleContext.Provider>
  );
}

export { ActiveModuleContext, ViewModule };
