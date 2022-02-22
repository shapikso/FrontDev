import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
import {TReducer} from "./types";
const initialState = {type: '', message: '',};

const notifyRedux: TReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return payload;
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notifyRedux;
