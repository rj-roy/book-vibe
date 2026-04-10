import React, { use, useContext } from 'react';
import BookCard from '../ui/BookCard';
import { BookContext } from '../../context/BookContext';

const booksPromise = fetch('/booksData.json').then((res) => res.json());

const AllBooks = () => {
    const books = use(booksPromise);

    const bookContext = useContext(BookContext);
    console.log(bookContext);

    return (
        <div className='w-full max-w-5xl mx-auto'>
            <h2 className='font-bold text-4xl text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    books.map((book, index) =>{
                        return <BookCard key={index} book={book} />
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;