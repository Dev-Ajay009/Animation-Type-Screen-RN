import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducer/reducer';

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux store and apply Saga middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
