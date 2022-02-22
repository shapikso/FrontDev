// import {TTodos} from "./todos/types";
// import {TTheme} from "./theme/types";
// import {TNotify} from "./notify/types";
import { rootReducer } from "./index";

// eslint-disable-next-line no-undef
export type ApplicationState = ReturnType<typeof rootReducer>;

// export type TStore = {
//     todos: TTodos[],
//     theme: TTheme,
//     notification: TNotify
// };
