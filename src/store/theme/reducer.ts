import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "./actionTypes";
import {darkTheme, lightTheme} from "../../constants/themes";
import { TReducer } from "./types";

const themeRedux: TReducer = (state = lightTheme, {type}) => {
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
