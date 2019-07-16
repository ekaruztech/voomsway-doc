import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useLogin } from 'views/login/loginHooks';


const LoginForm = ({ title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useLogin();

  const handleEmailChange = event => (
    setEmail(event.target.value)
  );

  const handlePasswordChange = event => (
    setPassword(event.target.value)
  );

  const handleLoginSubmit = () => {
    const userData  = { email, password };
    loginUser(userData).then(res => console.log(res))
  }

  return (
    <div className="login-container flex-center">
      <Form className="login-form">
        <h4 className="text-center padding-bottom24">{title}</h4>

        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
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

export default LoginForm;
