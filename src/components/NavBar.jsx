import { NavLink} from "react-router-dom";
import './nav.css'
const NavBar = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white mt-3 z-[1] p-2 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/listed-book">Listed Book</NavLink></li>
                            <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg md:text-3xl font-extrabold"><h1>Literary Lighthouse</h1></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex space-x-5 px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/listed-book">Listed Book</NavLink></li>
                        <li><NavLink to="/pages-to-read">Pages To Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-1">
                    <a className="btn bg-[#23BE0A] max-sm:w-[70px]  text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] max-sm:w-[70px]  text-white">Sing Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;