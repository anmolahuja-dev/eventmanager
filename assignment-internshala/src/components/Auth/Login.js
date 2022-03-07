import React,{useState} from 'react';
import {connect} from 'react-redux'
import {Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {login} from '../../action/auth'
import {setAlert} from '../../action/alert'

function Login({login,isAuthenticated}) {

  const [formData,setFormData] = useState({
    email:'',
    password:''
  });

  const {email,password} = formData;

  const onChange=(e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  if(isAuthenticated){
    return <Navigate to="/dashboard" ></Navigate>
  }

  const loginUser = (e) => {
    e.preventDefault();
    login({email,password});
  }

  return (
    <div className='container d-flex justify-content-center  align-items-center' style={{height:"80vh"}}>
      <div className='card'>
        <div className='card-body'>
        <h4 className="card-title"><b>Login</b></h4>
          <form onSubmit={e=>loginUser(e)}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                aria-describedby='emailHelp'
                onChange={(e) => onChange(e)}
                value={email}
                name="email"
              />
              
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                onChange={(e) => onChange(e)}
                value={password}
                name="password"
              />
            </div>
            <div className='mb-3 form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='checkbox'
              />
              <label className='form-check-label' htmlFor='exampleCheck1'>
                Remember Me
              </label>
            </div>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps= (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{login,setAlert})( Login);
