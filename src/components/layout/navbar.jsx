import { Link } from 'react-router-dom';
import logo from "../../assets/logo-cor-2.svg";
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Mapa", path: "/maps" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-row bg-slate-950 text-amber-50 py-2 px-4 items-center">
            <div className="flex-none">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="Trackfy Logo" className="h-10" />
                </Link>
            </div>
            <div className='flex-grow flex justify-end'>
                {isMenuOpen && (
                    <ul className="fixed top-0 right-0 w-screen h-screen flex flex-col items-center justify-center bg-slate-950 text-amber-50 gap-2 z-[9999]">
                        <div className='absolute top-4 right-4 cursor-pointer text-amber-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IoMdClose size={32} />
                        </div>
                        {navItems.map((item) => (
                            <Link to={item.path} key={item.name} className='w-full' onClick={() => setIsMenuOpen(false)}>
                                <li className="bg-slate-900 hover:bg-white text-white hover:text-slate-950 p-6 rounded-lg text-center mx-8">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
                {!isMenuOpen && (
                    <ul className="hidden md:flex flex-row gap-4">
                        {navItems.map((item) => (
                            <Link to={item.path} key={item.name}>
                                <li className="hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-amber-50 p-2">
                                    {item.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                )}
                <button className='cursor-pointer text-amber-50 md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoMdMenu size={32} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
