// import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { saveBook, saveWish } from '../utils';



const BookDetails = () => {

    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    const { image, name, author, rating, category, tags, totalPages, review, publisher, yearOfPublishing } = book
    const handleReadList = () =>{
        saveBook(idInt)
    }
    const handleWishist = () =>{
        saveWish(idInt)
    }
    return (
        <div className='flex flex-col lg:flex-row w-11/12 mx-auto max-h-[700px] gap-20 mt-28'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className='bg-[#F4FCF3] rounded-3xl p-16 flex-1 flex justify-center items-center'>
                <img className='max-h-full max-w-full rounded-xl' src={image} alt="" />
            </div>
            <div className='flex-1 flex flex-col justify-center'>
                <h1 className='text-5xl font-bold'>{name}</h1>
                <h2 className='text-lg my-5 font-medium'>By: {author}</h2>
                <hr />
                <h2 className='my-3 font-medium'>{category}</h2>
                <hr />
                <h3 className='text-lg text-black my-8'><span className='font-semibold'>Review :</span> {review}</h3>
                <div className='flex gap-10 text-lg items-center'>
                    <h2 className='font-semibold'>Tag:</h2>
                    <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-lg font-medium'>{tags[0]}</h2>
                    <h2 className='text-[#23BE0A] bg-[#F4FCF3] py-1 px-3 rounded-3xl text-lg font-medium'>{tags[1]}</h2>
                </div>
                <hr className='my-7' />
                <div>
                    <table className="">
                        <tbody>
                            <tr>
                                <td className="pr-14 font-medium">Number of Pages:</td>
                                <td className='font-bold'>{totalPages}</td>
                            </tr>
                            <tr>
                                <td className="pr-14 font-medium">Publisher:</td>
                                <td className='font-bold'>{publisher}</td>
                            </tr>
                            <tr>
                                <td className="pr-14 font-medium">Year of Publishing::</td>
                                <td className='font-bold'>{yearOfPublishing}</td>
                            </tr>
                            <tr>
                                <td className="pr-14 font-medium">Rating::</td>
                                <td className='font-bold'>{rating}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="space-x-6 mt-9">
                    <a onClick={handleReadList} className="btn border-[#23BE0A] bg-white max-sm:w-[70px]  text-black">Read</a>
                    <a onClick={handleWishist}  className="btn bg-[#59C6D2] max-sm:w-[70px] text-white">Wishlist</a>
                </div>
            </div>

        </div>
    );
};



export default BookDetails;