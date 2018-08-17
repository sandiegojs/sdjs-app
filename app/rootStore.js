import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(
    promiseMiddleware(),
  ),
));

export default rootStore;
