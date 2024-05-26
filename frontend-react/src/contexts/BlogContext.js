import { createContext, useState, useEffect } from "react";
import axios from "../api/axios";

const BlogContext = createContext(null)

export default BlogContext

const BlogContextProvider = ({children}) => {
  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:1337/api/blogs?field=title,description,createdAt,author&populate=thumbnail,categories')
      .then((response) => {
        console.log(response.data.data)
        setBlogs(response.data.data)
      })
  }, [])
  return (
    <BlogContext.Provider value={{blogs, setBlogs}}>
      {children}
    </BlogContext.Provider>
  )
}

export {BlogContextProvider}