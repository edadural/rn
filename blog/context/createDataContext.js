import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {        // , bisey eklendi mi silindi mi, baslangic degeri
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        // actions === {addBlogPost:(dispatch) => {return () = {} }}
        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };
    return { Context, Provider };
}