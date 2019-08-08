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
              to={{
                pathname: `/admin/modules/${module._id}/view`,
                state: {
                  moduleId: module._id,
                  type: 'module',
                }
              }}
              onClick={() => changeContent(module.title, module.body)}
            >
              {module.title}
            </Link> 

            { sections && sections.map(section => (
              <Link 
                to={{
                  pathname: `/admin/modules/${module._id}/view`,
                  state: {
                    moduleId: section._id,
                    type: 'section',
                    sectionTitle: section.title,
                    sectionBody: section.body,
                  }
                }}
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
