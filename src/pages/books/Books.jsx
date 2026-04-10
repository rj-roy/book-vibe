import React, { useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BookContext } from '../../context/BookContext';
import WishListed from '../../components/listedBooks/WishListed';
import ReadListed from '../../components/listedBooks/ReadListed';


const Books = () => {
    // const {handleMarkAsRead, wishList} = useContext(BookContext);

    return (
        <div className='w-full max-w-6xl mx-auto px-5 mt-10'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ReadListed/>
                </TabPanel>
                <TabPanel>
                    <WishListed/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;