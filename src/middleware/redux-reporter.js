import { log, logError } from '../lib/utils';

export default store => next => action => {
  log('__ACTION__', action);
  try {
    let result = next(action);
    log('__STATE__', store.getState());
    return result;
  } catch(error) {
    error.action = action;
    logError('__ERROR__', error);
    return error;
  }
};
