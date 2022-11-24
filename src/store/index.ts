import ISS from './ISS/reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSaSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSaSagaMiddleware();
export const rootReducer = combineReducers({ISS});
// @ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);