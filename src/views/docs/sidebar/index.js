import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from 'components/sidebar-container';

const Sidebar = ({ isLoading, modules, changeContent }) => {

  return (
    <SidebarContainer>
        { !isLoading && modules.map(module => (
          <Fragment key={module._id}>
            <Link
              to={`/docs/${module.title.replace(/\W+/g, '-').toLowerCase()}`}
              onClick={() => changeContent(module.title, module.body)}
              className='module-title'
            >
              {module.title}
            </Link> 

            { module.children && module.children.map(section => (
              <Link 
                to="#" 
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
