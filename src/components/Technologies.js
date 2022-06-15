import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Technologies() {
    return (
        <div>
            <h1 className="bg-warning text-center text-white">Technologies</h1>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-2'>
              <li className='nav-item'>
                <NavLink className='nav-link' to="">HTML</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to="javascript">Javascript</NavLink>
              </li>
            </ul>
            <div className="container">
            <Outlet />
            </div>
        </div>
    )
}

export default Technologies;