import React,{useState} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { addEvent } from '../../action/eventpost';
import { setAlert } from '../../action/alert';
import { Link } from 'react-router-dom';

function AddEvent({addEvent}) {
  const [formData,setFormData] = useState({
    name:'',
    details:'',
    date:new Date()
  });

  const {name,details,date} = formData;

  const onChange=(e)=> {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit=e=>{
    e.preventDefault();
    const newEvent = {
      name,
      details,
      date
    };
    addEvent({
      name,
      details,
      date
    });
    setFormData({
      name:'',
      details:'',
      date:''
    });


  }

  return (
    <>
      <div className='container d-flex justify-content-center mt-4'>
        <div className='card' style={{width:"800px"}}>
          <div className='card-body'>
            <h3 className='card-text'>Add Event</h3>
            <form onSubmit={e=>onSubmit(e)}>
            
              <div className="row g-3 align-items-center mb-4">
                <div className='col-3' >
                  <label for='event' className='col-form-label'>
                    Event Name :
                  </label>
                </div>
                <div className='col-9' >
                  <input
                    type='text'
                    name="name"
                    value={name}
                    onChange={e=>onChange(e)}
                    className='form-control'
                    aria-describedby='event'
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-4">
                <div className='col-3' >
                  <label for='event' className='col-form-label'>
                    Event Description :
                  </label>
                </div>
                <div className='col-9' >
                  <textarea
                    type='text'
                    className='form-control'
                    onChange={e=>onChange(e)}
                    name="details"
                    value={details}
                    aria-describedby='eventDetails'
                    rows="4" cols="50"
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-4">
                <div className='col-3' >
                  <label for='event' className='col-form-label'>
                    Event Date :
                  </label>
                </div>
                <div className='col-9' >
                  <input
                    type='date'
                    name="date"
                    value={date}
                    onChange={e=>onChange(e)}
                    className='form-control'
                    aria-describedby='date'
                  />
                </div>
              </div>
              
                <button type='submit' className='btn btn-primary d-inline'>
                Add Event
                </button>
            <Link to="/dashboard" className='btn btn-secondary d-inline ms-3 float-end '> Go To Dashboard</Link>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

AddEvent.propTypes= {
  addEvent: PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  setAlert:PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps,{addEvent,setAlert})(AddEvent);
