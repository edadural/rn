import React, { useReducer, useState } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Vue Js' }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {

    // const [blogPosts, setBlogPosts] = useState([
    //     { title: 'React Native' },
    //     { title: 'Javascript' },
    // ]);

    const [blogPosts, dispatch] = useReducer(blogReducer, [
        { title: 'React Native' },
        { title: 'Javascript' },
    ]);

    const addBlogPost = () => {
        // setBlogPost([...blogPost, { title: 'Vue Js' }]);

        dispatch({ type: 'add_blogpost' })
    }

    return (
        <BlogContext.Provider
            value={{ data: blogPosts, addBlogPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;