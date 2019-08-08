import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import showdown from 'showdown';
import { ActiveModuleContext } from "views/modules/view-module";

const ModuleContent = ({ title, content, moduleId, contentType, sectionTitle, sectionBody }) => {
  const mdConverter = new showdown.Converter();
  const activeModule = useContext(ActiveModuleContext);


  return (
    <section className='content'>
      <div className='title-header'>
        <h3>{ !title ? activeModule.module.title : title  }</h3>
        { 
          contentType === 'section' ?
            <Link to={{
              pathname: `/admin/sections/${moduleId}/edit`,
              state: {
                sectionId: moduleId,
                sectionTitle,
                sectionBody,
              }
            }}>Edit</Link>
          :
            <Link to={`/admin/modules/${moduleId}/edit`}>Edit</Link>
        }        
      </div>

      <p dangerouslySetInnerHTML={ 
        { __html: mdConverter.makeHtml(!content ? activeModule.module.body : content) }
      } />
    </section>
  );
};

export default ModuleContent;
