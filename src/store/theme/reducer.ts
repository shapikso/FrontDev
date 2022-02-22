import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "./actionTypes";
import {darkTheme, lightTheme} from "../../constants/themes";
import * as Actions from './action';
import { ActionType } from "typesafe-actions";
import {Reducer} from "redux";
import {TTheme} from "./types";

type TActions = typeof Actions;
type TThemeActions = ActionType<TActions>;

const themeRedux: Reducer<TTheme, TThemeActions> = (state = lightTheme, {type}) => {
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
