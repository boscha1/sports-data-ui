import React from 'react';
import logo from '../static-assets/nfl_logo.svg'

const NavBar = () => {
    return (
        <>
            <nav className="relative">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <a href="/">
                            <img width="70px" height="70px" src={logo} />
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-6 ">
                        <a href="/teams/" className="hover:text-darkGrayishBlue">Teams</a>
                        <a href="/coaches/" className="hover:text-darkGrayishBlue">Coaches</a>
                        <a href="/locations/" className="hover:text-darkGrayishBlue">Locations</a>
                        <a href="/stadiums/" className="hover:text-darkGrayishBlue">Stadiums</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;