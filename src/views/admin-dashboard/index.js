import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Table, Badge, Button } from 'react-bootstrap';
import { useModule } from 'views/modules/moduleHooks';
import Paginate from 'components/pagination';


const AdminDashboard = ({ title, requirePermission, history }) => {
  const { modules, pagination, getModules, modulesLoading } = useModule();
  const { per_page, current, total_count } = pagination;

  const handlePageClick = (perPage, page) => {
    getModules(perPage, page);
  }

  if (modulesLoading) {
    return <div>Loading...</div>
  }
  
  return (
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
                <td>{(index + 1) + ((current - 1) * per_page)}</td>
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
      {
        total_count > per_page && 
        <Paginate
          active={current}
          totalCount={total_count}
          perPage={per_page}
          handlePageClick={handlePageClick}
        />
      }
    </>
  )
};

export default withRouter(AdminDashboard);
