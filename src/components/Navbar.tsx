import lightmode from '../assets/images/lightmode.png'
import darkmode from '../assets/images/darkmode.png'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = ({ isDarkMode, toggleDarkMode }: { isDarkMode: boolean, toggleDarkMode: () => void }) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();

    const getLinkStyle = (path: string) => {
        if (location.pathname === path) {
            // If it's the active page
            return isDarkMode ? 'text-white' : 'text-blue-600';
        } else {
            // Non-active pages
            return isDarkMode ? 'text-zinc-600 hover:text-white transition-all' : 'text-black';
        }
    };
    return (
        <div className={`xl:w-[75rem] w-[90%] h-16 flex fixed items-center justify-center top-0 ${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f7f9fc]"}  z-[999]`}>

            <div className={`flex items-center justify-center w-full ${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f7f9fc]"}`}>

                <div className='flex items-center mt-8 md:flex-row flex-row-reverse justify-between w-full mb-2'>

                    <ul className="md:flex hidden items-center justify-center gap-9">
                        <li className={getLinkStyle('/')}><Link to="/">Home</Link></li>
                        <li className={getLinkStyle('/about')}><Link to="/about">About</Link></li>
                        <li className={getLinkStyle('/works')}><Link to="/works">Works</Link></li>
                        <li className={getLinkStyle('/contact')}><Link to="/contact">Contact</Link></li>
                    </ul>

                    <div onClick={toggleDarkMode} className={`${isDarkMode ? "bg-zinc-800 hover:bg-zinc-900 " : "bg-zinc-200 hover:bg-zinc-300"} h-9 w-9 flex items-center justify-center rounded-lg cursor-pointer hover:scale-105 transition-all`}>
                        <img src={darkmode} className={`w-5 ${isDarkMode ? "flex" : "hidden"}`} alt="" />
                        <img src={lightmode} className={`w-5 ${isDarkMode ? "hidden" : "flex"}`} alt="" />
                    </div>

                    <button
                        className={`menu md:hidden flex items-center justify-center ${showNavbar ? 'opened' : ''}`}
                        onClick={() => setShowNavbar(!showNavbar)}
                        aria-expanded={showNavbar}
                        aria-label="Main Menu"
                    >
                        <svg
                            aria-label="Main Menu"
                            width="40" height="40" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile navbar  */}
            <div
                className={`${showNavbar ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-8 opacity-0 pointer-events-none"
                    } md:hidden flex flex-col fixed top-[4.5rem] z-[1000] items-center justify-center w-full h-72 ${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f7f9fc]"
                    } transition-all duration-500 ease-in-out`}
            >
                <ul className="md:hidden flex flex-col items-center justify-center gap-9">
                    <li className={getLinkStyle('/')}><Link to="/">Home</Link></li>
                    <li className={getLinkStyle('/about')}><Link to="/about">About</Link></li>
                    <li className={getLinkStyle('/works')}><Link to="/works">Works</Link></li>
                    <li className={getLinkStyle('/contact')}><Link to="/contact">Contact</Link></li>
                </ul>
            </div>


        </div >
    )
}

export default Navbar