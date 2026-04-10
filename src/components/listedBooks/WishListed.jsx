import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';
import ListedCard from '../ui/ListedCard';

const WishListed = () => {
    const {wishList} = useContext(BookContext);

    return (
        <div>
            {
                wishList.map((book, index) => <ListedCard key={index} book={book} ></ListedCard>)
            }
        </div>
    );
};

export default WishListed;