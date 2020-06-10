import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => 
    <div className="nav-links">
        <NavLink className="about-me-link"
            to='/about-me'
            exact>About SWF Co.
        </NavLink>
        <NavLink className="flags-link"
            to='/flags'
            exact>Homemade Flags
        </NavLink>
        <NavLink className="about-flags-link"
            to='/about-flags'
            exact>About Our Flags
        </NavLink>
    </div>

export default NavBar