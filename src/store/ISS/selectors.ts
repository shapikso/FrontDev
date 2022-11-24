import { ApplicationState } from "../types";

export const selectISSPosition = (state: ApplicationState) => state.ISS.location;
export const selectISSPeople = (state: ApplicationState) => state.ISS.people;
