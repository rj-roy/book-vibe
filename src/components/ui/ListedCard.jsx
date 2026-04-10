import React from 'react';
import { NavLink } from 'react-router';

const ListedCard = ({ book }) => {
    return (
        <div className='bg-white border border-gray-300 rounded-3xl p-5'>
            <div className="bg-gray-100 rounded-xl p-6 w-full max-w-6xl mx-auto shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0 w-32 h-48 object-cover rounded-lg shadow-md p-3 bg-white my-auto">
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className="rounded-sm flex justify-center items-center mt-1"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            {book.bookName}
                        </h2>

                        <p className="text-gray-600 mb-4">
                            By : <span className="font-medium">{book.author}</span>
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="text-sm font-semibold text-gray-700">Tag</span>
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}

                            <span className="flex items-center gap-1 text-gray-600 text-sm ml-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Year of Publishing: {book.yearOfPublishing}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Publisher: {book.publisher}
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Page {book.totalPages}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-300">
                            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                                Category: {book.category}
                            </span>

                            <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Rating: {book.rating}
                            </span>

                            <NavLink to={`/bookDetails/${book.bookId}`} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                                View Details
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedCard;