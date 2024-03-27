import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ReadBooks = ({ book }) => {
    const navigate = useNavigate()
    const { image, id, name, author, rating, category, tags, yearOfPublishing, publisher, totalPages } = book
    const handleDetailClick = () =>{
        navigate(`/book-details/${id}`)
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8 border-2 p-8">
                <div className='bg-base-200 p-10 rounded-lg'>
                <img className='h-[300px] w-[250px] rounded-md' src={image} alt="" />
                </div>
                <div className="card-body">
                    <h1 className="card-title text-4xl font-bold">{name}</h1>
                    <p className='text-lg font-medium'>By: {author}</p>
                    <div className='flex items-center text-xl font-semibold'>
                        <h2 className='text-xl font-semibold'>Tag:</h2>
                        <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-xl font-semibold'>{tags[0]}</h2>
                        <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-xl font-semibold'>{tags[1]}</h2>
                        <h2 className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                            Year of Publishing: {yearOfPublishing}
                        </h2>
                    </div>
                    <div className='flex gap-8 font-semibold text-lg'>
                        <h2 className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                            Publisher: {publisher}</h2>
                        <h2 className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                            Page {totalPages}</h2>
                    </div>
                    <hr />

                    <div className="card-actions items-center  ">
                        <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-lg font-medium'>Category: {category}</h2>
                        <h2 className='text-[#FFAC33] bg-[#FFF3E0] py-1 px-3 rounded-3xl text-lg font-medium'>Rating: {rating}</h2>
                        <button onClick={handleDetailClick} className="btn bg-[#23BE0A] text-white py-1 px-3 rounded-3xl text-lg font-medium">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
ReadBooks.propTypes = {
    book: PropTypes.object
}
export default ReadBooks;