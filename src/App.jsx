
import { useState } from 'react'
import './App.css'
import Blogs from './Componets/Blogs/Blogs'
import Bookmarkedblogs from './Componets/BookmarkedBlogs/Bookmarkedblogs'
import Header from './Componets/Header/Header'

function App() {
  // bookmarksbutton setup-1
  const [bookmarks, setBookmarks] = useState([])

    // Spent time on read : setup -1 
    const [spentTime, setSpentTime] = useState(0)
    // console.log(spentTime);

  // bookmarksbutton setup-2 
  const handleBookMark = blog1 =>{
  // console.log(blog1);
  const newBookMark = [...bookmarks, blog1]
  setBookmarks(newBookMark)

  }

  // Spent time on read : setup -2
    const handleSpentTime = (time) =>{
    // console.log(time);
    const newTime = spentTime + time;
    setSpentTime(newTime)
    }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      {/* bookmarksbutton setup -3 */}
      {/* // Spent time on read : setup -2 */}
      <Blogs handleBookMark1={handleBookMark}  handleSpentTime1 ={handleSpentTime}></Blogs>

      {/* // bookmarksbutton setup - 8*/}
      <Bookmarkedblogs 
         bookmarks1={bookmarks} spentTime1={spentTime}>
      </Bookmarkedblogs>
      </div>
    </>
  )
}

export default App
