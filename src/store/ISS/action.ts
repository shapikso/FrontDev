import {ADD_PEOPLE, ADD_POSITION, LOAD_PEOPLE, LOAD_POSITION} from "./actionTypes";
import {action} from "typesafe-actions";
import {TLocation} from "./types";

export const addPosition = (payload: TLocation) => action(ADD_POSITION, payload);
export const loadPosition = () => action(LOAD_POSITION);
export const addPeople = (payload: string[]) => action(ADD_PEOPLE, payload);
export const loadPeople = () => action(LOAD_PEOPLE);