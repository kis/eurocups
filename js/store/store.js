import euroApp from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

export default createStore(
  euroApp,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
);
