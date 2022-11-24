export type TLocation = { latitude: string, longitude: string }
export type TISS = { location : TLocation, people : string[]};
export type TReducer = (state : TISS, action: {type: string, payload: TISS}) => TISS;
