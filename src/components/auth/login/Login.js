import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Login extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="auth-content-block login-content-block">
                <div className="login-form-block">
                    <h2 className="form-title">Login to Procced</h2>
                    <form>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email *" className="form-control" />
                            <input type="password" name="password" placeholder="Password" className="form-control" />
                            <p>Not have an account yet? <Link to="/auth/register">Register</Link></p>
                            <button type="submit" className="btn btn-info">Login Now</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}