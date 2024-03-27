import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.id === idInt)
    console.log(book)
    console.log(id)
    return (
        <div>
             <div>
                <img src="" alt="" />
             </div>
             <div>
                <h1>egwsrgsege</h1>
             </div>
        </div>
    );
};



export default BookDetails;