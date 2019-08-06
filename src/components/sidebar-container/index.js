import React from 'react';

const Sidebar = props => {

  return (
    <aside id='sidebar'>
      <nav>
        {props.children}
      </nav>      
    </aside>
  )
}

export default Sidebar;
