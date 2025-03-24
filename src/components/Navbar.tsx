import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            STOCK TRADING STUDIO
                        </Link>
                    </div>

                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden sm:flex sm:space-x-4 sm:items-center">
                        <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Create Strategy
                        </Link>
                        <Link to="/instruments" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Instruments
                        </Link>
                        <Link to="/savedscannerstep" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Saved Scanner
                        </Link>
                        <Link to="/portfolio" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden transition-all duration-1000 ease-in-out transform ${isMenuOpen ? 'opacity-100  translate-y-0 max-h-[500px]' : 'opacity-0 -translate-y-100 max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Create Strategy
                    </Link>
                    <Link to="/instruments" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Instruments
                    </Link>
                    <Link to="/savedscannerstep" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Saved Scanner
                    </Link>
                    <Link to="/portfolio" className="block text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Portfolio
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;