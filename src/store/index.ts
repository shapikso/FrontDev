import todos from './todos/reducer';
import notification from './notify/reducer';
import theme from './theme/reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSaSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSaSagaMiddleware();
export const rootReducer = combineReducers({todos, notification, theme});
// @ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);