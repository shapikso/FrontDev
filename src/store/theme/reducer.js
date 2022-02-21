import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "./actionTypes";

const darkTheme = {
    primary: '#000',
    secondary:'#fff',
    backgroundFirst:'#285c50',
    backgroundSecond:'#111d36',
    buttonColor: '#8e49e8'
};
const lightTheme = {
    primary: '#fff',
    secondary:'#000',
    backgroundFirst:'#68Eacc',
    backgroundSecond:'#497BE8',
    buttonColor: '#dca5ff'
};
//linear-gradient(to bottom, #68Eacc 0%, #497BE8 100%);
//background: linear-gradient(to bottom,#285c50 0%,#111d36 100%);
const themeRedux = (state = lightTheme, {type}) => {
    switch (type) {
        case SWITCH_LIGHT_THEME:
            return lightTheme;
        case SWITCH_DARK_THEME:
            return darkTheme;
        default:
            return state;
    }
};

export default themeRedux;
