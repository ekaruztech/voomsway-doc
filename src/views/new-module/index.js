import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from "showdown";
import { Form, Button } from 'react-bootstrap';
import 'react-mde/lib/styles/css/react-mde-all.css';

const NewModule = ({title}) => {
  const [value, setValue] = useState('**Hello World!**');
  const [selectedTab, setSelectedTab] = useState("write");
  const [moduleTitle, setModuleTitle] = useState('');
  const [addSubSection, setSubSectionCheck] = useState(false);
  const [subTitle, setSubTitle] = useState('');
  const [subSectionValue, setSubSctionValue] = useState('');
  const [subSelectedTab, setSubSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

  const handleValueChange = value => (
    setValue(value)
  );

  const handleModuleTitleChange = event => (
    setModuleTitle(event.target.value)
  );

  const handleModuleSubmit = () => {
    const mainModule = {
      title: moduleTitle,
      body: value,
    };
    const subSection = {
      title: subTitle,
      body: subSectionValue,
    };
    console.log({ mainModule, subSection })
  }

  const toggleCheckBox = (event) => {
    setSubSectionCheck(event.target.checked);
  }

  const handlesubTitleChange = event => (
    setSubTitle(event.target.value)
  );

  const handleSubSectionChange = value => (
    setSubSctionValue(value)
  );

  // const DocForm = () => (
  //   <>
  //     <Form.Group>
  //       <Form.Label>Title</Form.Label>
  //       <Form.Control 
  //         type="text" 
  //         placeholder="Module Title"
  //         value={moduleTitle}
  //         onChange={handleModuleTitleChange}
  //       />
  //     </Form.Group>

  //     <Form.Group>
  //       <Form.Label>Body</Form.Label>
  //       <ReactMde
  //         value={value}
  //         onChange={handleValueChange}
  //         selectedTab={selectedTab}
  //         onTabChange={setSelectedTab}
  //         generateMarkdownPreview={markdown =>
  //           Promise.resolve(converter.makeHtml(markdown))
  //         }
  //       />
  //     </Form.Group>
          
  //     <Form.Group>
  //       <Form.Check 
  //         type="checkbox"
  //         label="Add Sub-Section"
  //         defaultChecked={addSubSection}
  //         onChange={toggleCheckBox}
  //       />
  //     </Form.Group>
  //   </>
  // );

  return (
    <>
      <h3>{title}</h3>

      <Form className="form-container">
        <div id="main-module">
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Module Title"
              value={moduleTitle}
              onChange={handleModuleTitleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Body</Form.Label>
            <ReactMde
              value={value}
              onChange={handleValueChange}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              generateMarkdownPreview={markdown =>
                Promise.resolve(converter.makeHtml(markdown))
              }
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Check 
              type="checkbox"
              label="Add Sub-Section"
              defaultChecked={addSubSection}
              onChange={toggleCheckBox}
            />
          </Form.Group>
        </div>
        
        { addSubSection && (
          <div id="sub-section">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text"
                required
                placeholder="Section Title"
                value={subTitle}
                onChange={handlesubTitleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Body</Form.Label>
              <ReactMde
                value={subSectionValue}
                onChange={handleSubSectionChange}
                selectedTab={subSelectedTab}
                onTabChange={setSubSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(converter.makeHtml(markdown))
                }
              />
            </Form.Group>
          </div>
        )}
        

        <Button
          block
          variant="success"
          onClick={handleModuleSubmit}
        > 
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewModule;
