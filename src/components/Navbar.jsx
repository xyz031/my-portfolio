    import React, { useState } from 'react';
    import Logo from '../assets/Logo.png';
    import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
    import { FaChevronRight } from 'react-icons/fa6';
    import ResponsiveMenu from './ResponsiveMenu';

    const Navbar = () => {
        const [showMenu, setShowMenu] = useState(false);
        const toggleMenu = () => {
            setShowMenu(!showMenu);
        };

        return (
            <div className="bg-gray-950 -mb-7 z-50 w-full py-3 fixed">
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0">
                    {/* Logo Section */}
                    <div>
                        <a href="/" title="Go to homepage">
                            <div className="flex text-2xl items-center font-semibold text-blue-500">
                                {'<'}
                                <p className="text-white">Aditya Maurya</p>
                                {'/>'}
                            </div>
                        </a>
                    </div>
                    {/* Menu Section */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-7 text-xl items-center font-semibold text-white">
                            <a href="/">
                                <li className="cursor-pointer">Home</li>
                            </a>
                            <a href="#about">
                                <li
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    About
                                </li>
                            </a>
                            <a href="#education">
                                <li
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Education & Experience
                                </li>
                            </a>
                            <a href="#project">
                                <li
                                    className="cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("project")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Projects
                                </li>
                            </a>
                            <a href="#contact">
                                <button
                                    className="px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] shadow-blue-500 border-blue-400 border-2 transition-transform hover:scale-105"
                                >
                                    Contact <FaChevronRight />
                                </button>
                            </a>
                        </ul>
                    </nav>
                    {/* Hamburger Icon */}
                    <div className="md:hidden text-white text-4xl">
                        {showMenu ? (
                            <HiMenuAlt3 onClick={toggleMenu} aria-label="Close menu" />
                        ) : (
                            <HiMenuAlt1 onClick={toggleMenu} aria-label="Open menu" />
                        )}
                    </div>
                </div>
                {/* Responsive Menu */}
                <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        );
    };

    export default Navbar;
