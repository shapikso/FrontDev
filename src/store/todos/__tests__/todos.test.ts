import todos from '../reducer';
import {ADD_TODO, DELETE_TODO, CHECK_TODO} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(todos(undefined, {})).toEqual([{title: 'random Text', id: 1, completed: false}]);
    });
    it('should handle ADD_TODO action', () => {
        expect(todos([], {type:ADD_TODO, payload: {title: 'random Text for Test', id: 2, completed: false}})).toEqual([{title: 'random Text for Test', id: 2, completed: false}]);
    });
    it('should handle DELETE_TODO action', () => {
        expect(todos([{title: 'random Text for Test', id: 2, completed: false}], {type:DELETE_TODO, payload: 2})).toEqual([]);
    });
    it('should handle CHECK_TODO action', () => {
        expect(todos([{title: 'random Text for Test', id: 2, completed: false}], {type:CHECK_TODO, payload: 2})).toEqual([{title: 'random Text for Test', id: 2, completed: true}]);
    });
    it('should handle default action', () => {
        expect(todos([{title: 'random Text for Test', id: 2, completed: false}], {type:'default'})).toEqual([{title: 'random Text for Test', id: 2, completed: false}]);
    });
});
