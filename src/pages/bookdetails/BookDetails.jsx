import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';


const BookDetails = () => {
    const { bookId: bookParamsId } = useParams();
    const books = useLoaderData();
    
    const expectedBook = books.find((book) => book.bookId === Number(bookParamsId));

    const {
        bookName,
        author,
        image,
        review,     
        totalPages,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = expectedBook;
    
    const {
        handleMarkAsRead,
        handleWishList,
        storedBook, 
        wishList,       
    } = useContext(BookContext);

    const isReadListed = storedBook.some((book) => book.bookId === expectedBook.bookId);
    const isWishListed = wishList.some((book) => book.bookId === expectedBook.bookId);

    return (
        <div className="w-full max-w-5xl grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8 px-4">
            <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
                <img src={image} alt="Album" className="h-115" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className="card-title">By: {author}</h2>
                <b className="py-2 border-y">{category}</b>
                <p><b>Review:</b> {review}</p>
                <div className="flex items-center gap-2 ">
                    {tags.map((tag, ind) => (
                        <div
                            key={ind}
                            className="badge text-green-500 bg-green-100 font-bold "
                        >
                            {tag}
                        </div>
                    ))}
                </div>
                <div className="border-t space-y-3">
                    <div className="flex justify-between items-center gap-2">
                        <span>Number of pages: </span> <b>{totalPages}</b>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>publisher: </span> <b>{publisher}</b>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <span>Publish time: </span> <b>{yearOfPublishing}</b>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className={`btn ${isReadListed ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 text-white"}`}
                            onClick={() => handleMarkAsRead(expectedBook)}
                        >
                            Mark as Read
                        </button>
                        <button 
                            disabled={isReadListed}
                            className={`${isWishListed ? "btn cursor-not-allowed" : "btn btn-primary"}`}
                            onClick={() => handleWishList(expectedBook)}
                        >
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;