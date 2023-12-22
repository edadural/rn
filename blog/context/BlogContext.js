import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Vue Js' }];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {      // callback fonk. geriye donsun diye
        dispatch({ type: 'add_blogpost' });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost },
    []
);