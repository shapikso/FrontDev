import {combineReducers, createStore} from "redux";
import todos from './todos/reducer';
import notification from './notify/reducer';
import theme from './theme/reducer';

const rootReducer = combineReducers({todos, notification, theme});
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
