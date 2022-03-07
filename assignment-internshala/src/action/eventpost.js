import axios from 'axios';
import { ADD_EVENT, ADD_FAILED, GETEVENT_ERROR, GET_EVENTS } from './types';
import { setAlert } from './alert';
export const addEvent =
  ({ name, details, date }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ name, details, date });
    try {
      const res = await axios.post('/api/event', body, config);
      dispatch({
        type: ADD_EVENT,
        payload: res.data,
      });
      dispatch(setAlert('Event Added Successfully','success'))
    } catch (error) {
      const errors = error.response.data.errors;

      if (errors) {
        errors.forEach((err) => dispatch(setAlert(err.msg, 'danger')));
      }

      dispatch({
        type: ADD_FAILED,
      });
    }
  };

// Load Events
export const loadEvents = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/event');
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GETEVENT_ERROR,
    });
  }
};
