import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { PropTypes } from 'prop-types';
// bookmarksbutton setup -4
const Blogs = ({handleBookMark1, handleSpentTime1}) => {
    // console.log(handleBookMark1);
  const [blogs, setBlogs] = useState([]);
  // console.log(blogs);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3  mt-10">
      {/* <h1 className="text-4xl">blogs:{blogs.length}</h1> */}
      {
        // bookmarksbutton setup -5
      blogs.map((singleBlogs) => <Blog 
        key={blogs.id} 
        blog1={singleBlogs}
        handleBookMark2={handleBookMark1}
        handleSpentTime2 ={handleSpentTime1}
        >
      </Blog>)
      }
    </div>
  );
};
Blogs.propTypes ={
    handleBookMark1: PropTypes.func,
   handleSpentTime1:  PropTypes.func
}
export default Blogs;
