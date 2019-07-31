import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useLogin } from 'views/login/loginHooks';


const Header = ({ location }) => {
  const { loginData } = useLogin();
  const adminRoute = location.pathname.includes("/admin");

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href={adminRoute ? "/admin" : "/"} fixed="top">
          <img
            src="https://voomsway.com/wp-content/uploads/2019/06/logo_alt.svg"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        {
          adminRoute &&
          <Fragment>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                { !loginData.isAuthenticated && 
                  <Nav.Link href="/admin/login">Log In</Nav.Link> 
                }
                { loginData.isAuthenticated && 
                  <Nav.Link href="#">Log Out</Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>      
          </Fragment>
        }
      </Navbar>    
    </Fragment>
  )
};

export default withRouter(Header);
