import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";

export const showNotification = (type:string, message: string) => ({type:SHOW_NOTIFICATION, payload: {type, message}});
export const hiddeNotification = () => ({type:CLEAR_NOTIFICATION});
