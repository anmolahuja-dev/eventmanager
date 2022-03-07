import React from 'react';
import Events from '../Event/Events';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAlert } from '../../action/alert';

function Dashboard({ setAlert, isAuthenticated }) {
  if (isAuthenticated===false) {
    setAlert('Please Login First!', 'danger');
    return <Navigate to='/login'></Navigate>;
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-10'>
          <Events />
        </div>
        <div className='col-md-2'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert })(Dashboard);
