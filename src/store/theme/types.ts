export type TTheme = {primary: string, secondary: string, backgroundFirst: string, backgroundSecond: string, buttonColor: string};
export type TReducer = (state : TTheme, action: {type: string }) => TTheme;
