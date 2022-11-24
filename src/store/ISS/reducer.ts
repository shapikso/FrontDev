import {ADD_PEOPLE, ADD_POSITION} from "./actionTypes";
import { TISS } from "./types";
import * as Actions from "./action";
import {ActionType} from "typesafe-actions";
import {Reducer} from "redux";

type TActions = typeof Actions;
type TISSActions = ActionType<TActions>;
const initialState = { location : {latitude: '', longitude: ''}, people : []};

const ISSRedux: Reducer<TISS, TISSActions>  = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POSITION:
            return {...state, location : action.payload };
        case ADD_PEOPLE:
            return {...state, people : action.payload};
        default:
            return state;
    }
};

export default ISSRedux;
