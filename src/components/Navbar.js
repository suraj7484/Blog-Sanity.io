import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

const Navbar = () => {
    return (
        <header className='bg-red-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink
                        to='/'
                        exact
                        activeClassName='text-white'
                        className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'>
                        CD
          </NavLink>
                    <NavLink
                        to='/post'
                        exact
                        activeClassName='text-red-100 bg-red-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                        Blog Posts
          </NavLink>
                    <NavLink
                        to='/project'
                        exact
                        activeClassName='text-red-100 bg-red-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                        Projects
          </NavLink>
                    <NavLink
                        to='/about'
                        exact
                        activeClassName='text-red-100 bg-red-700'
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                        About Us
          </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon network="twitter" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon network="youtube" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon network="instagram" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon network="whatsapp" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon network="linkedin" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
