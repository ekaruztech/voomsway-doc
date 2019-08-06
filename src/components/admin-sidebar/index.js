import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from 'components/sidebar-container';
import { ActiveModuleContext } from "views/modules/view-module";

const AdminSidebar = ({ changeContent }) => {
  const activeModule = useContext(ActiveModuleContext);
  const { module, sections } = activeModule;

  return (
    <SidebarContainer>
        { !module.isLoading && 
          <>
            <Link 
              to={`/admin/modules/${module._id}/view`} 
              onClick={() => changeContent(module.title, module.body)}
            >
              {module.title}
            </Link> 

            { sections && sections.map(section => (
              <Link 
                to="#" 
                key={section._id} 
                className='child-section'
                onClick={() => changeContent(section.title, section.body)}
              >
                {section.title}
              </Link> 
            ))}
          </>
        }
    </SidebarContainer>
  )
}

export default AdminSidebar;
