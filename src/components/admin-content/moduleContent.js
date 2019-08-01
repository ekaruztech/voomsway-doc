import React, { useContext } from 'react';
import showdown from 'showdown';
import { ActiveModuleContext } from "views/modules/view-module";

const ModuleContent = ({ title, content }) => {
  const mdConverter = new showdown.Converter();
  const activeModule = useContext(ActiveModuleContext);


  return (
    <section id='content'> 
      <h3>{ !title ? activeModule.module.title : title  }</h3>

      <p dangerouslySetInnerHTML={ 
        { __html: mdConverter.makeHtml(!content ? activeModule.module.body : content) }
      } />
    </section>
  );
};

export default ModuleContent;
