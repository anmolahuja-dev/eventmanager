import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <ul className='navbar-nav mr-auto'>
      
      <li className='nav-item'>
        <a onClick={logout} className='nav-link' href='/'>
          Logout
        </a>
      </li>
    </ul>
  );
  const guestsLinks = (
    <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/login'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/signup'>
                Sign Up
              </a>
            </li>
          </ul>
  );



  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Event Organizer
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='/'>
                Home
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            
            <li className='nav-item'>
              <a className='nav-link' href='/contact'>
                Contact
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='/dashboard'>
                Dashboard
              </a>
            </li>

          </ul>

          {!loading ? (
        <Fragment>{isAuthenticated ? authLinks : guestsLinks}</Fragment>
          ) : null}


        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
