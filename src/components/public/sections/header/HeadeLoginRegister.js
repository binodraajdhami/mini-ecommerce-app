import React from 'react';
import { Link } from 'react-router-dom'

const HeadeLoginRegister = () => {
    return (
        <div className="header-login-register">
            <ul>
                <li>
                    <Link to="/auth/login">
                        <i className="fa fa-sign-in"></i> Login
                    </Link>
                </li>
                <li>
                    <Link to="/auth/register">
                        <i className="fa fa-lock"></i> Register
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default HeadeLoginRegister;