import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => 
    <div className="nav-links">
        <NavLink className="about-me-link"
            to='/'
            exact>About SWF Co.
        </NavLink>
        <NavLink className="flags-link"
            to='/'
            exact>Homemade Flags
        </NavLink>
    </div>

export default NavBar