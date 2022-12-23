import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Skills</Link></li>
                        <li><Link>Projects</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <Link className="normal-case text-xl font-bold"><span className='text-orange-500'>MOZZAMMEL</span> HOSSEN</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li className="hover:text-orange-600"><Link>Home</Link></li>
                    <li className="hover:text-orange-600"><Link>About</Link></li>
                    <li className="hover:text-orange-600"><Link>Skills</Link></li>
                    <li className="hover:text-orange-600"><Link>Projects</Link></li>
                    <li className="hover:text-orange-600"><Link>Blog</Link></li>
                    <li className="hover:text-orange-600"><Link>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;