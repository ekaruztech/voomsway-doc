import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from "showdown";
import { withRouter } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { useModule } from 'views/modules/moduleHooks';

const AddSection = ({ title, history, ...props  }) => {
  const [value, setValue] = useState('**Hello World!**');
  const [selectedTab, setSelectedTab] = useState("write");
  const [subTitle, setSubTitle] = useState('');
  const { createSubSection } = useModule();

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  const handleValueChange = value => (
    setValue(value)
  );

  const handleSubTitleChange = event => (
    setSubTitle(event.target.value)
  );

  const handleSectionSubmit = () => {
    const subSection = {
      title: subTitle,
      body: value,
      module: props.match.params.id
    };
    createSubSection({ subSection }, history);
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
                  placeholder="Section Title"
                  value={subTitle}
                  onChange={handleSubTitleChange}
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
            </div>
            

            <Button
              block
              variant="success"
              onClick={handleSectionSubmit}
            > 
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(AddSection);
