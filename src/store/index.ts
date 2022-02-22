import todos from './todos/reducer';
import notification from './notify/reducer';
import theme from './theme/reducer';
import { combineReducers, createStore } from 'redux';

export const rootReducer = combineReducers({todos, notification, theme});
// @ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

