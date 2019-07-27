import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from "showdown";
import { withRouter } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useModule } from 'views/modules/moduleHooks';

const NewModule = ({ title, history }) => {
  const [value, setValue] = useState('**Hello World!**');
  const [selectedTab, setSelectedTab] = useState("write");
  const [moduleTitle, setModuleTitle] = useState('');
  const { createModule } = useModule();

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
    createModule({ mainModule }, history);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="10">
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
                <Form.Label>Description</Form.Label>
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
            </div>
            

            <Button
              block
              variant="success"
              onClick={handleModuleSubmit}
            > 
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(NewModule);
