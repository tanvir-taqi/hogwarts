import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div className="navbar bg-green-100 py-4 fixed z-50 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={true} className=" bg-green-100 menu menu-compact dropdown-content mt-3 p-4 shadow  rounded-box w-52">
                            <li><Link to ='/home'>Home</Link></li>
                            <li><Link to =''>Portfolio</Link></li>
                            <li><Link to ='/history'>History</Link></li>
                            <li><Link to ='/students'>Alumni</Link></li>
                            <li><Link to ='/teachers'>Popular Teachers</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ">
                    <Link to ='/' className="flex flex-col justify-center items-center">
                        <img src="assets/logo-school.png" className='h-14 w-14' alt="" />
                        <h2 className="text-lg font-bold hidden md:block">Hogwarts School of Witchcraft and Wizardry</h2>
                    </Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-circle">
                        <div className="indicator">
                            <span className="badge badge-xs p-1  indicator-item">Enroll Now</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;