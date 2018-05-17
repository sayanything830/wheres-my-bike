import { combineReducers } from 'redux';
import memoryReducer from './memory-game';

export default combineReducers({
  game: memoryReducer,
});
