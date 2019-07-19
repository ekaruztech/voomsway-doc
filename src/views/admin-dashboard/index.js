import React from 'react';
import { withRouter } from 'react-router-dom';
import  {isLoggedIn } from 'services/isLoggedIn';

const AdminDashboard = ({ title, requirePermission, history }) => {
  const isAuthorized = requirePermission && isLoggedIn();
  
  return (
    <>
      <h3>{title} - Dashboard</h3>
      
      { isAuthorized ?
          <h3>Admin here</h3>
        :
          history.push('/admin/login')}
      }
    </>
  )
};

export default withRouter(AdminDashboard);
