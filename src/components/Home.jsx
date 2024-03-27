import { useLoaderData, useNavigate } from "react-router-dom";
import SoloBook from "./SoloBook";

const Home = () => {
    const books = useLoaderData()
    // console.log(books)
    const navigate = useNavigate()
    const handleShowList = () =>{
        navigate(`/listed-book`)
    }
    
    return (
        <div className="w-11/12 mx-auto mt-6">
            <div className="hero  bg-base-200 rounded-3xl py-10 p-7">
                <div className=" flex items-center w-10/12 justify-between flex-col lg:flex-row-reverse ">
                    <img src="/public/books/To_Kill_a_Mockingbird_(first_edition_cover).jpg" className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div className="space-y-7">
                        <h1 className="text-6xl font-bold">Books to freshen <br />up your bookshelf</h1>
                        <button onClick={handleShowList} className="btn bg-[#23BE0A] text-white">View The List</button>
                    </div>
                </div>
            </div>
            <h2 className="text-center text-4xl font-semibold my-16">Boos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map((book, index) => <SoloBook key={index} book={book}></SoloBook>)
                }
            </div>
        </div>
    );
};

export default Home;