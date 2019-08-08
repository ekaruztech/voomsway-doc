import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from "showdown";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useModule } from 'views/modules/moduleHooks';

const ModuleForm = (props) => {
  const { modules } = useModule();
  const module = modules.find(module => module._id === props.editPageId) || 
                 { title: props.sectionTitle, body: props.sectionBody };
  const [title, setTitle] = useState(module ? module.title : '');
  const [value, setValue] = useState( module ? module.body : '**Hello World!**');
  const [selectedTab, setSelectedTab] = useState("write");

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
    setTitle(event.target.value)
  );

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="10">
          <h3>{props.title}</h3>

          <Form className="form-container">
            <div id="main-module">
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder={`${props.type} Title`}
                  value={title}
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
                  textAreaProps={{
                    style: {
                      height: '55vh'
                    }
                  }}
                />
              </Form.Group>
            </div>
            

            <Button
              block
              variant="success"
              onClick={() => props.submitChange(title, value)}
            > 
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ModuleForm;
