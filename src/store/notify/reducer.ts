import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
import {TNotify} from "./types";
import * as Actions from "./action";
import {ActionType} from "typesafe-actions";
import {Reducer} from "redux";

type TActions = typeof Actions;
type TTNotifyActions = ActionType<TActions>;
const initialState = {type: '', message: '',};

const notifyRedux: Reducer<TNotify, TTNotifyActions> = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return action.payload;
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notifyRedux;
