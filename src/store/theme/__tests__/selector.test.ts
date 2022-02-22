import {selectTheme} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {
            notification: {
                type:'success',
                message:'success'},
            todos:[],
            theme: {
                primary: '#000',
                secondary:'#fff',
                backgroundFirst:'#285c50',
                backgroundSecond:'#111d36',
                buttonColor: '#8e49e8'
            }};
        const selected = selectTheme(mockParameters);
        expect(selected).toEqual(mockParameters.theme);
    });
});
