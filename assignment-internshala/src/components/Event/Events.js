import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadEvents } from '../../action/eventpost';

function Events({events,loadEvents}) {

  useEffect(() => {
    loadEvents();
  }, []);



  return (
    <div className='container'>
      <h2>Events</h2>
      <div>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Event #</th>
              <th scope='col'>Event Name</th>
              <th scope='col'>Details</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event=>(
              <tr key={event.id}>
              <th scope='row'>{event._id}</th>
              <td>{event.name}</td>
              <td>{event.details}</td>
              <td>{event.date}</td>
            </tr>
            ))}
            
          </tbody>
        </table>

        
      </div>
    </div>
  );
}

Events.propType = {
  loadEvents:PropTypes.func.isRequired,
  events:PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  events:state.eventReducer.events
})

export default connect(mapStateToProps,{loadEvents})(Events);
