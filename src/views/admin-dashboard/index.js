import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import  {isLoggedIn } from 'services/isLoggedIn';
import { Table, Badge, Button } from 'react-bootstrap';
import { useModule } from 'views/modules/moduleHooks';


const AdminDashboard = ({ title, requirePermission, history }) => {
  const isAuthorized = requirePermission && isLoggedIn();
  const { modules } = useModule();
  
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
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Module</th>
                  <th>Last Edited</th>
                  <th>Active</th>         
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>           
                {
                  modules.map((module, index) => (
                    <tr key={module._id}>
                      <td>{index + 1}</td>
                      <td>{module.title}</td>
                      <td>
                        <Badge variant="dark">
                          { new Date(module.updatedAt).toISOString().split('T')[0] }
                        </Badge> - elshady@gmail.com
                      </td>
                      <td>{module.active ? 'True' : 'False'}</td>
                      <td>
                        <Link to={`/admin/modules/${module._id}/view`}>View</Link>
                        <Link to={`/admin/modules/${module._id}/edit`}>Edit</Link>
                        <Link to={`/admin/modules/${module._id}/section`}>Add Section</Link>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </>
        :
          history.push('/admin/login')}
      }
    </>
  )
};

export default withRouter(AdminDashboard);
