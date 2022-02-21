import theme from '../reducer';
import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(theme(undefined, {})).toEqual({
            primary: '#fff',
            secondary:'#000',
            backgroundFirst:'#68Eacc',
            backgroundSecond:'#497BE8',
            buttonColor: '#dca5ff'
        });
    });
    it('should handle SWITCH_DARK_THEME action', () => {
        expect(theme({}, {type:SWITCH_DARK_THEME})).toEqual({
            primary: '#000',
            secondary:'#fff',
            backgroundFirst:'#285c50',
            backgroundSecond:'#111d36',
            buttonColor: '#8e49e8'
        });
    });
    it('should handle CLEAR_NOTIFICATION action', () => {
        expect(theme({}, {type:SWITCH_LIGHT_THEME})).toEqual({
            primary: '#fff',
            secondary:'#000',
            backgroundFirst:'#68Eacc',
            backgroundSecond:'#497BE8',
            buttonColor: '#dca5ff'
        });
    });
    it('should handle default action', () => {
        expect(theme({ primary: '#fff',
            secondary:'#000',
            backgroundFirst:'#68Eacc',
            backgroundSecond:'#497BE8',
            buttonColor: '#dca5ff'}, {type:'default'})).toEqual({ primary: '#fff',
            secondary:'#000',
            backgroundFirst:'#68Eacc',
            backgroundSecond:'#497BE8',
            buttonColor: '#dca5ff'});
    });
});
