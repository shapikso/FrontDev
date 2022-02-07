import React from "react";
const Context = React.createContext();

const SET_NAME = 'SET_NAME';

const reducer = (state, {payload, type}) => {

    switch (type) {
        case SET_NAME:
            return {name: payload || 'Guest'};
        default:
            return state;
    }
}

const ThemeContextProvider = (props) => {

  const [state, dispatch] = React.useReducer(reducer, {name: 'Guest'});
  const changeName = (userName) => dispatch({type: SET_NAME, payload: userName});
  const {name} = state
  const contextValue = { name, changeName }
        return (
            <Context.Provider
                value={contextValue}
            >
                {props.children}
            </Context.Provider>
        );
}

export { ThemeContextProvider, Context as UserContext };
