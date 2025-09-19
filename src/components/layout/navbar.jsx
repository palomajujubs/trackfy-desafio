import { Link } from 'react-router-dom';
import logo from "../../assets/logo-cor-2.svg";

const Navbar = () => {
    return (
        <div className="flex flex-row bg-slate-950 text-amber-50 px-4 h-16 w-screen items-center justify-start ">
            <div className="flex-none">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} alt="Trackfy Logo" className="h-10" />
                </Link>
            </div>
            <ul className="flex flex-row gap-4 ml-8">
                <li className="hover:bg-white text-white hover:text-slate-950 p-6 rounded-lg"><Link to="/">Home</Link></li>
                <li className="hover:bg-white text-white hover:text-slate-950 p-6 rounded-lg"><Link to="/maps">Map</Link></li>
                <li className="hover:bg-white text-white hover:text-slate-950 p-6 rounded-lg"><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
