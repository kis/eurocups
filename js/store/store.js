import euroApp from '../reducers/reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();

export default createStore(
  euroApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
