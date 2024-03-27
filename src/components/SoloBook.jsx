import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SoloBook = ({ book }) => {
    const navigate = useNavigate()
    // console.log(book)
    const { image, name,id, author, rating, category, tags} = book
    const handleCardClick = () =>{
        navigate(`/book-details/${id}`)
    }
    return (
        <div>
            <div onClick={handleCardClick} className="card w-96 h-full hover:cursor-pointer bg-base-100 shadow-xl p-10 ">
                <figure className="bg-base-200 p-10 rounded-xl">
                    <img src={image} alt="Shoes" className="rounded-lg h-[280px]" />
                </figure>
                <div className="">
                    <div className="flex gap-6 mt-5">
                        <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-lg font-medium'>{tags[0]}</h2>
                        <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-lg font-medium'>{tags[1]}</h2>
                    </div>
                    <h1 className="card-title text-3xl font-bold my-3">{name}</h1>
                    <p className='font-semibold '>By : {author}</p>
                    <hr style={{ borderBottom: "1px dotted #888", height: "1px" }} className='mt-7 mb-3'  />
                    <div className='flex justify-between'>
                        <h2 className=' font-medium'>{category}</h2>
                        <h2 className='flex gap-1 font-medium'>{rating} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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