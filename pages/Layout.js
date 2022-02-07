import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "../index.css";

const Layout = () => {
    return (
        <>
        <nav className='navs'>

            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact</Link>
                </li>
                <li>
                    <Link to = "/nopage">NoPage</Link>
                </li>
                
            </ul>
        </nav>
        <hr />
        <Outlet />
        </>
    )
}
export default Layout;
