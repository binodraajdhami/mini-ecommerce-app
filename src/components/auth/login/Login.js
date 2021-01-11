import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            errorEmail: null,
            errorPassword: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleError = () => {
        let errorEmail;
        errorEmail = this.state.email ? null : 'Username or Email is required';
        this.setState({
            errorEmail
        });

        let errorPassword;
        errorPassword = this.state.password ? null : 'Password is required';
        this.setState({
            errorPassword
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleError();
    }

    render() {
        return (
            <div className="auth-content-block login-content-block">
                <div className="login-form-block">
                    <h2 className="form-title">Login to Procced</h2>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Username/Email *" className="form-control" onChange={this.handleChange} />
                            {
                                this.state.errorEmail !== null
                                    ? <div className="alert alert-danger">{this.state.errorEmail}</div>
                                    : ''
                            }
                            <input type="password" name="password" placeholder="Password" className="form-control" onChange={this.handleChange} />
                            {
                                this.state.errorPassword !== null
                                    ? <div className="alert alert-danger">{this.state.errorPassword}</div>
                                    : ''
                            }
                            <p>Not have an account yet? <Link to="/auth/register">Register</Link></p>
                            <button type="submit" className="btn btn-info">Login Now</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}