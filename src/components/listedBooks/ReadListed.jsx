import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import ListedCard from '../ui/ListedCard';

const ReadListed = ({ sortingType }) => {
    const { storedBook } = useContext(BookContext);
    const [filteredList, setFilteredList] = useState(storedBook);

    useEffect(() => {
        if(sortingType){
            if(sortingType==="pages"){
                const sortedData = [...storedBook].sort((a, b) => a.totalPages - b.totalPages);
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFilteredList(sortedData);
            }else if(sortingType==='rating'){
                const sortedData = [...storedBook].sort((a, b) => a.rating - b.rating);                 
                setFilteredList(sortedData);
            }
        };
    }, [sortingType, storedBook]);

    if (filteredList.length === 0) {
        return <div className="h-[50vh] bg-gray-100 flex items-center justify-center mt-10">
            <h2 className="font-bold text-3xl">No wish list data found</h2>
        </div>
    }

    return (
        <div className='grid space-y-10 mt-10'>
            {
                filteredList.map((book, index) => <ListedCard key={index} book={book} ></ListedCard>)
            }
        </div>
    );
};

export default ReadListed;