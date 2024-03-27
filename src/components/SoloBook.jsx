import PropTypes from 'prop-types';

const SoloBook = ({ book }) => {
    // console.log(book)
    const { image, id, name, author, rating, category, tag1, tag2 } = book
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl p-10 ">
                <figure className="bg-base-200 p-10 rounded-xl">
                    <img src={image} alt="Shoes" className="rounded-lg h-[280px]" />
                </figure>
                <div className="">
                    h1
                    <h2 className="card-title">{name}</h2>
                    <p>{author}</p>
                    <hr />
                    <div className='flex justify-between'>
                        <h2>{category}</h2>
                        <h2 className='flex gap-1'>{rating} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        </h2>
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