import React from 'react';
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 w-full max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/books">Listed Books</NavLink></li>
                        <li><NavLink>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-2xl font-bold md:block hidden">Book Vibe</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/books">Listed Books</NavLink></li>
                    <li><NavLink>Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <Link className='btn btn-success text-white font-bold border-none'>Sign In</Link>
                <Link className='btn btn-info text-white font-bold border-none hidden md:flex'>Sign Up</Link>
            </div>
        </div>
    );
};

export default NavBar;