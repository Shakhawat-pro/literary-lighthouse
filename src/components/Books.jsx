import PropTypes from 'prop-types';
const Books = ({book}) => {
    // console.log(book)
    const {bookId, bookName, author, rating, category, tag1, tag2} =book
    return (
        <div>
            
        </div>
    );
};
Books.propTypes ={
    book: PropTypes.object
}

export default Books;