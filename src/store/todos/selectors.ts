import { ApplicationState } from "../types";
import {createSelector} from "reselect";

export const selectTodos = (state: ApplicationState) => state.weather;

