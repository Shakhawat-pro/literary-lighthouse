import PropTypes from 'prop-types';

const SoloBook = ({ book }) => {
    // console.log(book)
    const { image, id, name, author, rating, category, tag1, tag2 } = book
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-             center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
SoloBook.propTypes = {
    book: PropTypes.object
}

export default SoloBook;