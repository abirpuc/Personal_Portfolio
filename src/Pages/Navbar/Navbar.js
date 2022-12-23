import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-black px-24 sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='#home'>Home</Link></li>
                            <li><Link to='#about'>About</Link></li>
                            <li><Link to='#skills'>Skills</Link></li>
                            <li><Link to='#project'>Projects</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link to="#contact">Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="normal-case text-xl font-bold"><span className='text-orange-500'>MOZZAMMEL</span><span className='text-white'> HOSSEN</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li className="text-white hover:text-orange-600"><Link to='#home'>Home</Link></li>
                        <li className="text-white hover:text-orange-600"><Link to='#about'>About</Link></li>
                        <li className="text-white hover:text-orange-600"><Link to='#skills'>Skills</Link></li>
                        <li className="text-white hover:text-orange-600"><Link to='#project'>Projects</Link></li>
                        <li className="text-white hover:text-orange-600"><Link >Blog</Link></li>
                        <li className="text-white hover:text-orange-600"><Link to="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;