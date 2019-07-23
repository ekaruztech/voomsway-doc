import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import  {isLoggedIn } from 'services/isLoggedIn';
import { Table, Badge, Button } from 'react-bootstrap';


const DocList = () => (
  <Table striped bordered hover responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Module</th>
        <th>Last Edited</th>
        <th>View | Edit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Authentication</td>
        <td><Badge variant="dark">07/07/2019</Badge> - elshady@gmail.com</td>
        <td>
          <Link to="#">View    </Link>
          <Link to="#">Edit</Link>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Account</td>
        <td><Badge variant="dark">07/07/2019</Badge> - mary@gmail.com</td>
        <td>
          <Link to="#">View    </Link>
          <Link to="#">Edit</Link>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Staff</td>
        <td><Badge variant="dark">07/07/2019</Badge> - mary@gmail.com</td>
        <td>
          <Link to="#">View    </Link>
          <Link to="#">Edit</Link>
        </td>
      </tr>
    </tbody>
  </Table>
);


const AdminDashboard = ({ title, requirePermission, history }) => {
  const isAuthorized = requirePermission && isLoggedIn();
  
  return (
    <>  
      { isAuthorized ?
          <>       
            <h3 className="inline-block">{title} Dashboard</h3>

            <div className="float-right add-module-btn">
              <Button variant="info" size="sm"
                onClick={() => history.push('/admin/new-module')}
              >
                Add Module
              </Button>
            </div>
            <DocList />
          </>
        :
          history.push('/admin/login')}
      }
    </>
  )
};

export default withRouter(AdminDashboard);
