import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPost, setBlogPost] = useState([
        { title: 'React Native' },
        { title: 'Javascript' },
    ]);

    const addBlogPost = () => {
        setBlogPost([...blogPost, { title: 'Vue Js' }]);
    }

    return (
        <BlogContext.Provider
            value={{ data: blogPost, addBlogPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;