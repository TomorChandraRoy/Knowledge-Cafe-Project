
import PropTypes from 'prop-types'

const SingleBook = ({bookmark1}) => {
    // console.log(bookmark1);
    const {title} = bookmark1
  return (
    <div className='bg-slate-300 p-4 m-4 rounded-lg'>
      <h3 className='text-2xl'>{title}</h3>
    </div>
  )
}

SingleBook.propTypes = {
    bookmark1:PropTypes.object
}

export default SingleBook;
