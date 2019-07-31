import React, { useState, createContext } from 'react';
import { useActiveModule } from 'views/modules/moduleHooks';
import Sidebar from 'components/admin-sidebar';
import ModuleContent from 'components/admin-content/moduleContent';


const ActiveModuleContext = createContext();

const ViewModule = (props) => {
  const [state] = useActiveModule(props.match.params.id);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      <div className='sidebar-wrapper'>
        <Sidebar changeContent={handleContentChange} />

        <ModuleContent content={content} title={title} />
      </div>
    </ActiveModuleContext.Provider>
  );
}

export { ActiveModuleContext, ViewModule };
