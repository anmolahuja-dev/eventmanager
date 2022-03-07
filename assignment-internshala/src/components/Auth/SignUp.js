import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../action/alert';
import { register } from '../../action/auth';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


function SignUp(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    checked:false
  });

  const { name, email, password, password2,checked } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert('Passwords do not match', 'danger');
    } else {
      // Register user
      props.register({ name, email, password });
      
    }
  };

  if (props.isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    <div
      className='container d-flex justify-content-center  align-items-center'
      style={{ height: '80vh' }}
    >
      <div className='card'>
        <div className='card-body'>
          <h4 class='card-title'>
            <b>Signup</b>
          </h4>
          <form onSubmit={e=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input className="form-control"type="text" name="name" onChange={e=>onChange(e)} id="" />
            </div>
            <div className='mb-3'>
              <label for='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                
                aria-describedby='emailHelp'
                name='email'
                onChange={e=>onChange(e)}
              />
              <div id='emailHelp' className='form-text'>
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className='mb-3'>
              <label for='inputPassword5' class='form-label'>
                Password
              </label>
              <input
                type='password'
                id='inputPassword5'
                class='form-control'
                aria-describedby='passwordHelpBlock'
                name='password'
                onChange={e=>onChange(e)}
              />
              <div id='passwordHelpBlock' class='form-text'>
                Your password must be 6-20 characters long.
              </div>
            </div>
            <div className='mb-3'>
              <label for='inputPassword5' class='form-label'>
                Confirm Password
              </label>
              <input
                type='password'
                id='inputPassword5'
                class='form-control'
                aria-describedby='passwordHelpBlock'
                name='password2'
                onChange={e=>onChange(e)}
              />
            </div>
            <div className='mb-3 form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
                name="checked"
                onChange={e=>onChange(e)}
              />
              <label className='form-check-label' for='exampleCheck1'>
                I Agree to the{' '}
                <a href='https://www.termsandconditionsgenerator.com/live.php?token=6WGe8kgDCP7bjXBWoMVfkjt3HGvDqShY'>
                  terms and conditons
                </a>
              </label>
            </div>
            <button type='submit' className='btn btn-primary'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(SignUp);
