import { PropTypes } from 'prop-types';
import SingleBook from '../singleBook/SingleBook';

// bookmarksbutton setup - 9
const Bookmarkedblogs = ({bookmarks1, spentTime1}) => {
    // console.log(bookmarks1 );
    return (
        <div  className="md:w-1/3 bg-gray-200 ml-10 mt-10 pt-4">
                <div>
                    <h2 className="text-2xl text-center">Reading time:{spentTime1}</h2>
                </div>
             <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks1.length}</h2>

             {/* bookmarksbutton setup - 10 */}
             {
                bookmarks1.map(marks1 =>  <SingleBook key={bookmarks1.id} bookmark1={marks1}></SingleBook>)
             }
        </div>
    );
};
Bookmarkedblogs.propTypes = {
    bookmarks1:PropTypes.array,
    spentTime1:PropTypes.number
}
export default Bookmarkedblogs;
