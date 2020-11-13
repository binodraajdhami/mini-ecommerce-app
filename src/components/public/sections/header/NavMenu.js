import React from 'react';
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" activeClassName="active">Prouduct</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" activeClassName="active">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/login" activeClassName="active" className="btn-login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/register" activeClassName="active" className="btn-register">Register</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavMenu;