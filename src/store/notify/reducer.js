import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
const initialState = {type: '', message: '',};

const todosRedux = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return payload;
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default todosRedux;
