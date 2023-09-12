import PropTypes from "prop-types";
import {FaBookmark} from 'react-icons/fa';

// bookmarksbutton setup-6 
// Spent time on read : setup -
const Blog = ({ blog1, handleBookMark2, handleSpentTime2 }) => {
  // console.log(blog1);
//   console.log(handleBookMark2);
  const {title,cover,reading_time,hashtags,author_img,author,posted_date} = blog1;

  return (
    <div className='mb-14 space-y-4'>
      <img className="w-full mb-8" src={cover} alt={`cover all picture ${title}`} />
        <div className="flex justify-between mb-4">
           <div className="flex">
             <img className="w-14" src={author_img} alt="" />
               <div className="ml-6">
                 <h3 className="text-2xl">{author}</h3>
                 <p>{posted_date}</p>
                </div>
           </div>
           <div>
             <span>{reading_time} min read</span>
             {/* // bookmarksbutton setup-7 */}
             <button onClick={() => handleBookMark2(blog1)} className="ml-2 text-xl text-red-600"><FaBookmark/></button>
           </div>
        </div>
      <h3 className="text-4xl">{title}</h3>
       <p className="mt-3 ">
          {
          hashtags.map((hash, idx) => <span className="text-2xl" key={idx}><a href=""></a>#{hash}</span>)
          }
        </p>
        {/* akne handleSpentTime2 aer reading_time ta (app.jex) aer (time peramitare jabe)  */}
          <button onClick={() =>
             handleSpentTime2(reading_time)} className="text-purple-500 font-bold  text-lg underline">
            Mark As a Read</button>
    </div>
    
  );
};

// 
Blog.propTypes = {
  blog1: PropTypes.object.isRequired,
  handleBookMark2: PropTypes.func,
  handleSpentTime2: PropTypes.func

};
export default Blog;
