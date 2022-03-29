import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
import {action} from "typesafe-actions";

export const showNotification = (type:string, message: string) => action(SHOW_NOTIFICATION, {type, message});
export const hiddeNotification = () => action(CLEAR_NOTIFICATION);
