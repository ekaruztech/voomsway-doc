import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import docSlug from 'services/docSlug';
import SidebarContainer from 'components/sidebar-container';

const Sidebar = ({ isLoading, modules, changeContent }) => {

  return (
    <SidebarContainer>
        { !isLoading && modules.map(module => (
          <Fragment key={module._id}>
            <Link 
              to={{
                pathname: `/docs/${docSlug(module.title)}`,
                state: {
                  moduleId: module._id
                }
              }}
              onClick={() => changeContent(module.title, module.body)}
              className='module-title'
            >
              {module.title}
            </Link> 

            { module.children && module.children.map(section => (
              <Link 
                to={`/docs/${docSlug(section.title)}`} 
                key={section._id} 
                className='child-section'
                onClick={() => changeContent(section.title, section.body)}
              >
                {section.title}
              </Link> 
            ))}
          </Fragment>
        ))
      }
    </SidebarContainer>
  )
}

export default Sidebar;
