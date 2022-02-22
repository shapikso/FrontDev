import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "./actionTypes";
import {darkTheme, lightTheme} from "../../constants/themes";

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
