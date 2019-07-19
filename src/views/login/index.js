import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useLogin } from 'views/login/loginHooks';


const LoginForm = ({ title, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, loginData } = useLogin();

  const handleEmailChange = event => (
    setEmail(event.target.value)
  );

  const handlePasswordChange = event => (
    setPassword(event.target.value)
  );

  const handleLoginSubmit = () => {
    const userData  = { email, password };
    loginUser(userData, history);
  }

  return (
    <div className="login-container flex-center">
      <Form className="login-form">
        <h4 className="text-center padding-bottom24">{title}</h4>
        {
          loginData.error.details && 
          Object.keys(loginData.error.details).length === 0 
          && loginData.error.key &&
          <span className="help-block">{loginData.error.key}</span>
        }

        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          {
            loginData.error.details && loginData.error.details.email && 
            <span className="help-block">{loginData.error.details.email}</span>
          }
          <Form.Control 
            type="email" 
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          {
            loginData.error.details && loginData.error.details.password && 
            <span className="help-block">{loginData.error.details.password}</span>
          }
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button
          block
          variant="success"
          onClick={handleLoginSubmit}
        > 
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default withRouter(LoginForm);
