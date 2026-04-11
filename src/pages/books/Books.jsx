import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BookContext } from '../../context/BookContext';
import WishListed from '../../components/listedBooks/WishListed';
import ReadListed from '../../components/listedBooks/ReadListed';
import { useState } from 'react';


const Books = () => {
    const [sortingType, setSortingType] = useState("");
    
    return (
        <div className='w-full max-w-6xl mx-auto px-5 mt-10'>
            <Tabs>
                <TabList>
                    <div className='flex justify-between'>
                        <div>
                            <Tab>Read Books</Tab>
                            <Tab>Wishlist Books</Tab>
                        </div>

                        <div>
                            {/* <div className="dropdown dropdown-start">
                                <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li onClick={()=> setSortingType("pages")}><a>Pages</a></li>
                                    <li onClick={()=> setSortingType("rating")}><a>Rating</a></li>
                                </ul>
                            </div> */}

                            <div className="relative inline-block group">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="px-4 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer m-1 border border-gray-300 transition-colors"
                                >
                                    Short by
                                </div>

                                <ul
                                    tabIndex={0}
                                    className="absolute right-0 top-full mt-2 w-52 p-2 bg-white rounded-xl shadow-lg opacity-0 invisible scale-95 origin-top-right group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:scale-100 transition-all duration-200 z-50 list-none"
                                >
                                    <li onClick={()=> setSortingType("pages")}>
                                        <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">Pages</a>
                                    </li>
                                    <li onClick={()=> setSortingType("rating")}>
                                        <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">Rating</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </TabList>

                <TabPanel>
                    <ReadListed sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <WishListed sortingType={sortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;