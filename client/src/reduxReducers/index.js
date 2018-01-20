// combine all reducers using combineReducers
import { combineReducers } from 'redux';
import userreducer from './userreducer';

const allreducers = combineReducers({
  user: userreducer,
});

export default allreducers;
