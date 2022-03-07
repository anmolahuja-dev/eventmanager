import {
    ADD_EVENT,
    ADD_FAILED,
    GETEVENT_ERROR,
    GET_EVENTS
} from '../action/types';

const initialState ={
    events:[],
    loading:false
};

export default function(state= initialState,action){
    switch(action.type){
        case GET_EVENTS : 
            return {
                ...state,
                events:action.payload,
                loading:false
            }
        case ADD_EVENT :
            return {
                ...state,
                events:[action.payload,...state.events]
            }
        case ADD_FAILED :
            return {};
        case GETEVENT_ERROR:
            return action.payload

        default: return state;
    }
}