/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../utilities/localDb';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBook, setStoredBook] = useState(() => getAllReadListFromLocalDB());
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        addReadListToLocalDB(currentBook);

        const isBookExsist = storedBook.find((book) => book.bookId === currentBook.bookId);

        if (isBookExsist) {
            toast.error("Book already exsist on readlist")
            return;
        } else {
            setStoredBook([...storedBook, currentBook]);
            toast.success(`${currentBook.bookName} is added to readlist`)
        }
    };

    const handleWishList = (currentBook) => {
        const isBookOnWish = wishList.find((book) => book.bookId === currentBook.bookId);
        const isBookStored = storedBook.find((book) => book.bookId === currentBook.bookId);

        if(isBookStored){
            toast.error("Book is on readlist");
            return;
        }

        if(isBookOnWish){
            toast.error("Book already on wishlist");
            return;
        }else{
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wishlist`);
        }
    }


    const data = {
        handleMarkAsRead,
        storedBook,
        setStoredBook,
        handleWishList,
        wishList,
        setWishList,
    }

    return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;