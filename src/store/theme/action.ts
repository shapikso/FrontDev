import {SWITCH_LIGHT_THEME, SWITCH_DARK_THEME} from "./actionTypes";
import {action} from "typesafe-actions";

export const switchToLight = () => action(SWITCH_LIGHT_THEME);
export const switchToDrak = () => action(SWITCH_DARK_THEME);