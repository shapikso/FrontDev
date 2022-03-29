export type TNotify = {type: string, message: string};
export type TReducer = (state : TNotify, action: {type: string, payload: TNotify}) => TNotify;
