import reducer from '../reducers';
import thunk from '../middleware/redux-thunk';
import reporter from '../middleware/redux-reporter';
import { createStore, applyMiddleware } from 'redux';

let appStoreCreate = () => createStore(reducer);

export default appStoreCreate;
