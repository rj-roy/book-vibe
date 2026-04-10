import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import ListedCard from '../ui/ListedCard';

const ReadListed = () => {
    const {storedBook} = useContext(BookContext);
    
    return (
        <div className='grid space-y-10 mt-10'>
            {
                storedBook.map((book, index) => <ListedCard key={index} book={book} ></ListedCard>)
            }
        </div>
    );
};

export default ReadListed;